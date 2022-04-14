function teste(){  
    const botao = document.querySelector('#botao');
    const nome = document.querySelector('#nome'); 
 
    //alert("foi")    
    console.log(nome.value)

    const lista = JSON.parse(localStorage.getItem('lista') || '[]');

    lista.push({
        'nome': nome.value        
    })
    localStorage.setItem('lista', JSON.stringify(lista));
}



