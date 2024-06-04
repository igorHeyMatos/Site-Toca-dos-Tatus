let texto = document.getElementById("apresentacao-texto-2");
let barra = document.getElementById("barra-principal");
let conteudoPrincipal = document.getElementById("conteudo-principal");

function btnLermais(){

    texto.style.display =  'block';
    conteudoPrincipal.style.height = '700px';
    

}

function btnLermenos(){

    texto.style.display = 'none';
    conteudoPrincipal.style.height = '500px';

}