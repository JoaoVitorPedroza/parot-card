//funcional para a primeira coluna
var imagens = document.querySelectorAll(".img_pri");
for(x = 0; x <imagens.length; x++){
    imagens[x].addEventListener("click", display);
}
function display(event){
    event.target.style.border = "3px solid red";
    // evento de troca de imagem:
    if(event.target.src.endsWith("imagen/2e072ef8d57d22b4ef4206f38546e2ed.jpg")){
        event.target.src="imagen/picapau.jpg";
    }
    else{
        event.target.src="imagen/2e072ef8d57d22b4ef4206f38546e2ed.jpg";
        event.target.style.border = "none";
    }
    //nota para lembrar que o que faz a alteração da do escutador é a classe do img, portanto modificar a segunda fila
    //vamos terminar o jogo da memoria
}
//esse é o evento para a segunda coluna
var imagens2 = document.querySelectorAll(".img_pri2");
for(x = 0; x <imagens2.length;x++){
    imagens2[x].addEventListener("click", display2);
}
function display2(event){
    event.target.style.border = "3px solid red";
    // evento de troca de imagem:
    if(event.target.src.endsWith("imagen/2e072ef8d57d22b4ef4206f38546e2ed.jpg")){
        event.target.src="imagen/papaleguas.jpg";
}
else{
    event.target.src="imagen/2e072ef8d57d22b4ef4206f38546e2ed.jpg";
    event.target.style.border = "none";
    }
}
//esse é o evento para a terceira coluna
var imagens3 = document.querySelectorAll(".img_pri3");
for(x = 0; x <imagens3.length;x++){
    imagens3[x].addEventListener("click", display3);
}
function display3(event){
    event.target.style.border = "3px solid red";
    // evento de troca de imagem:
        if(event.target.src.endsWith("imagen/2e072ef8d57d22b4ef4206f38546e2ed.jpg")){
        event.target.src="imagen/coyote.jpg";
    }
    else{
        event.target.src="imagen/2e072ef8d57d22b4ef4206f38546e2ed.jpg";
        event.target.style.border = "none";
    }
}
//esse é o evento para a quarta coluna
var imagens4 = document.querySelectorAll(".img_pri4");
for(x = 0;x <imagens4.length;x++){
    imagens4[x].addEventListener("click", display4);
}
function display4(event){
    event.target.style.border = "3px solid red";
    //evento de troca de imagem:
    if(event.target.src.endsWith("imagen/2e072ef8d57d22b4ef4206f38546e2ed.jpg")){
        event.target.src="imagen/zeca.jpg";
    }
    else{
        event.target.src="imagen/2e072ef8d57d22b4ef4206f38546e2ed.jpg";
        event.target.style.border = "none";
    }
}
//esse é o evento para a quinta coluna
var imagens5 = document.querySelectorAll(".img_pri5");
for(x = 0;x <imagens5.length;x++){
    imagens5[x].addEventListener("click", display5);
}
function display5(event){
    event.target.style.border = "3px solid red";
    //event de troca de imagem:
    if(event.target.src.endsWith("imagen/2e072ef8d57d22b4ef4206f38546e2ed.jpg")){
        event.target.src="imagen/texugo.jpg";
    }
    else{
        event.target.src="imagen/2e072ef8d57d22b4ef4206f38546e2ed.jpg";
        event.target.style.border = "none";
    }
}
//esse é o evento para a sexta coluna
var imagens6 = document.querySelectorAll(".img_pri6");
for(x = 0;x <imagens6.length;x++){
    imagens6[x].addEventListener("click", display6);
}
function display6(event){
    event.target.style.border = "3px solid red";
    //evnto de troca de imagem:
    if(event.target.src.endsWith("imagen/2e072ef8d57d22b4ef4206f38546e2ed.jpg")){
        event.target.src="imagen/Leoncio.jpg";
    }
    else{
        event.target.src="imagen/2e072ef8d57d22b4ef4206f38546e2ed.jpg";
        event.target.style.border = "none";
    }
}
