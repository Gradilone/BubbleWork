function criarConta() {
    // Seleciona todos os campos de entrada dos formulários
    const form1Fields = document.querySelectorAll('#form1 input');
    const form2Fields = document.querySelectorAll('#form2 input');
    const mensagemDiv = document.getElementById('mensagem');
    
    // Verifica se todos os campos estão preenchidos
    let allFilled = true;
    
    form1Fields.forEach(field => {
        if (field.type === 'text' && field.value.trim() === '') {
            allFilled = false;
        }
    });
    
    form2Fields.forEach(field => {
        if (field.type === 'text' && field.value.trim() === '') {
            allFilled = false;
        }
        if (field.type === 'checkbox' && !field.checked) {
            allFilled = false;
        }
    });
    
    // Exibe a mensagem apropriada e redireciona se todos os campos estiverem preenchidos
    if (allFilled) {
        mensagemDiv.textContent = 'Preenchido com sucesso!';
        mensagemDiv.style.color = 'green';
        setTimeout(() => {
            mensagemDiv.textContent = '';
            window.location.href = 'home.html';
        }, 2000);
    } else {
        mensagemDiv.textContent = 'Preencha todos os campos.';
        mensagemDiv.style.color = 'red';
        setTimeout(() => {
            mensagemDiv.textContent = '';
        }, 2000);
    }
}