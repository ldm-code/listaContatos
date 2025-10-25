from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy
import re
app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:sua_senha_do_banco@127.0.0.1/contatos"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
class Contato(db.Model):
    __tablename__ = "contatos" 
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(100), nullable=False)
    numero = db.Column(db.String(20), nullable=False)
with app.app_context():
    db.create_all()



@app.route('/')
def start():
        return render_template('contatos.html')
@app.route('/add',methods=['POST'])
def site():

                nome=request.form.get('nome').strip()
                numero=request.form.get('numero').strip()
                if not re.fullmatch(r'[\d\s()+-]+', numero):
                        return 'Número de telefone inválido!', 400
               
                if numero and nome:
                      
                        novo=Contato(nome=nome,numero=numero)
                        db.session.add(novo)
                        db.session.commit()
                        contatos=Contato.query.order_by(Contato.nome.asc()).all()
                        return  render_template('lista.html',contatos=contatos) 

                else:
                        return 'nome ou numero nao inserido ' ,400
@app.route('/delete/<int:id>',methods=['POST'])
def delete(id):
        contato=Contato.query.get(id)
        if contato:
                db.session.delete(contato)
                db.session.commit()
                contatos=Contato.query.order_by(Contato.nome.asc()).all()
                return render_template('lista.html',contatos=contatos)
        else:
                return 'contato nao encontrado', 404
if __name__=='__main__':
        app.run(debug=True)