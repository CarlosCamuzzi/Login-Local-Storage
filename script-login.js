window.addEventListener('load', () => {
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', loginUser);
});

function loginUser() {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    let userValid = [];     // Array para salvar os dados no foreach

    const userList = JSON.parse(localStorage.getItem('userList'));
    if (email.value && password.value) {    // Se tem email e password preenchido     
        userList.forEach(element => {
            if (email.value == element.emailCad && password.value == element.passwordCad) {     // Pega os dados da tentativa de login
                userValid = {
                    nameLogin: element.nameCad,
                    email: element.emailCad,
                    password: element.passwordCad
                }
            }
        }); // Fim foreach
        // IF verifica se entrada usuário está no localStorage
        if (email.value == userValid.nameLogin && password.value == userValid.password) {
            const token = Math.random().toString(16).substring(2);  // Gera token

            localStorage.setItem('token', token);
            localStorage.setItem(('userLogin'), JSON.stringify(userValid));
            window.location.href = 'page-inicial.html';
        } else {
            alert('Usuário não cadastrado, verifique.')
        }
    } else {
        alert('Dados incompletos, verifique.');
    } 
}



/*Veja o JS necessário agora:

document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
  
      var btn = document.querySelector("#submit");
    
    btn.click();
  
  }
});*/


// document.addEventListener ('keypress', (event) => {
//     const keyName = event.key;
//     alert ('keypress event \ n \ n' + 'chave:' + nome da chave);
//   });

