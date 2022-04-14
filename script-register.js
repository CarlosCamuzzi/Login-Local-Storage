window.addEventListener('load', () => {
    const btn = document.querySelector('#btn-reg');
    btn.addEventListener('click', registerUser)
});

function registerUser() {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const validPassword = document.querySelector('#valid-password');    
    
    if (password.value == validPassword.value) {
        if (name.value && email.value) {            
            const userList = JSON.parse(localStorage.getItem('userList') || '[]');

            // Gerar código de usuário     
            let userCode = 1;            
            userList.forEach(element => {
                userCode++;
            });

            userList.push(
                {
                    'nameCad': name.value,
                    'emailCad': email.value,
                    'passwordCad': password.value,
                    'codUserCad': userCode
                }
            );

            localStorage.setItem('userList', JSON.stringify(userList));
            alert('Cadastro efetuado com sucesso!');
            window.location.href = "index.html"; // Redirecionando para Login
        } else {
            alert('Dados incompletos, verifique.');
        }
    } else {
        alert('Senha não confere, verifique.');
    }
}





    // const span = document.createElement('span');
    // span.textContent = email.value;
    // document.body.append(span);

