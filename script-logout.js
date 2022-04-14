checkToken();

window.addEventListener('load', () => {
    const btn = document.querySelector('#btn-logout');
    btn.addEventListener('click', userLogout);
});

function userLogout() {                 // Limpando dados login do localStorate
    localStorage.removeItem('token');
    localStorage.removeItem('userLogin');
    window.location.href = 'index.html';
}

function checkToken() {                    // Se não houver token, então user não está logado
    if (!localStorage.getItem('token')) {
        alert("Você precisa estar logado");
        window.location.href = 'index.html';
    }
}

