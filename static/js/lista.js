document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.toggle-editar').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');

            const spanNome = document.getElementById(`nome-${id}`);
            const spanNumero = document.getElementById(`numero-${id}`);

            const inputNome = document.getElementById(`input-nome-${id}`);
            const inputNumero = document.getElementById(`input-numero-${id}`);

            const hiddenNome = document.getElementById(`hidden-nome-${id}`);
            const hiddenNumero = document.getElementById(`hidden-numero-${id}`);

            const submitBtn = document.querySelector(`#form-edit-${id} input[type="submit"]`);

            if (!spanNome || !spanNumero || !inputNome || !inputNumero || !hiddenNome || !hiddenNumero || !submitBtn) return;


            inputNome.style.display = 'inline-block';
            inputNumero.style.display = 'inline-block';
            submitBtn.style.display = 'inline-block';
            spanNome.style.display = 'none';
            spanNumero.style.display = 'none';


            inputNome.value = spanNome.textContent.trim();
            inputNumero.value = spanNumero.textContent.trim();


            hiddenNome.value = inputNome.value;
            hiddenNumero.value = inputNumero.value;

            inputNome.oninput = () => hiddenNome.value = inputNome.value.trim();
            inputNumero.oninput = () => hiddenNumero.value = inputNumero.value.trim();
        });
    });

    document.querySelectorAll('form[id^="form-edit-"] input[type="submit"]').forEach(submitBtn => {
        submitBtn.addEventListener('click', e => {
            const form = submitBtn.closest('form');
            const id = form.id.replace('form-edit-', '');

            const nome = document.getElementById(`input-nome-${id}`).value.trim();
            const numero = document.getElementById(`input-numero-${id}`).value.trim();
            const temLetra= /[a-zA-Z]/.test(numero);

            if (!nome || !numero) {
                e.preventDefault();
                alert("Erro: todos os campos devem ser preenchidos!");
            } else if (temLetra) {
                    e.preventDefault();
                    alert("Erro: o campo número não pode conter letras!");
                    document.getElementById(`input-numero-${id}`).focus();
            } else {
                document.getElementById(`hidden-nome-${id}`).value = nome;
                document.getElementById(`hidden-numero-${id}`).value = numero;
            }
        });
    });

});
