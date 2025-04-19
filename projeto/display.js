//inicio
var imagens = document.querySelectorAll(".img_pri");
for(x = 0; x <imagens.length; x++){
    imagens[x].addEventListener("click", display);
}
function display(event){
    if(event.target.src.endsWith("imagens_projeto/back.png")){
        event.target.style.transform =  "rotateY(180deg)";
        event.target.src="imagens_projeto/bobrossparrot.gif";
    }
    else{
        event.target.src="imagens_projeto/back.png";
        event.target.style.transform = "rotateY(0deg)";
    }
}
//esse é o evento para a segunda coluna
var imagens2 = document.querySelectorAll(".img_pri2");
for(x = 0; x <imagens2.length;x++){
    imagens2[x].addEventListener("click", display2);
}
function display2(event){
    if(event.target.src.endsWith("imagens_projeto/back.png")){
        event.target.style.transform =  "rotateY(180deg)";
        event.target.src="imagens_projeto/explodyparrot.gif";
}
else{
    event.target.src="imagens_projeto/back.png";
    event.target.style.transform = "rotateY(0deg)";
    }
}
var imagens3 = document.querySelectorAll(".img_pri3");
for(x = 0; x <imagens3.length;x++){
    imagens3[x].addEventListener("click", display3);
}
function display3(event){
        if(event.target.src.endsWith("imagens_projeto/back.png")){
            event.target.style.transform =  "rotateY(180deg)";
            event.target.src="imagens_projeto/fiestaparrot.gif";
    }
    else{
        event.target.src="imagens_projeto/back.png";
        event.target.style.transform = "rotateY(0deg)";
    }
}
var imagens4 = document.querySelectorAll(".img_pri4");
for(x = 0;x <imagens4.length;x++){
    imagens4[x].addEventListener("click", display4);
}
function display4(event){
    //evento de troca de imagem:
    if(event.target.src.endsWith("imagens_projeto/back.png")){
        event.target.style.transform =  "rotateY(180deg)";
        event.target.src="imagens_projeto/metalparrot.gif";
    }
    else{
        event.target.style.transform = "rotateY(0deg)";
        event.target.src="imagens_projeto/back.png";
    }
}
var imagens5 = document.querySelectorAll(".img_pri5");
for(x = 0;x <imagens5.length;x++){
    imagens5[x].addEventListener("click", display5);
}
function display5(event){
    if(event.target.src.endsWith("imagens_projeto/back.png")){
        event.target.style.transform =  "rotateY(180deg)";
        event.target.src="imagens_projeto/revertitparrot.gif";
    }
    else{
        event.target.style.transform = "rotateY(0deg)";
        event.target.src="imagens_projeto/back.png";
    }
}
var imagens6 = document.querySelectorAll(".img_pri6");
for(x = 0;x <imagens6.length;x++){
    imagens6[x].addEventListener("click", display6);
}
function display6(event){
    if(event.target.src.endsWith("imagens_projeto/back.png")){
        event.target.style.transform =  "rotateY(180deg)";
        event.target.src="imagens_projeto/tripletsparrot.gif";
    }
    else{
        event.target.style.transform = "rotateY(0deg)";
        event.target.src="imagens_projeto/back.png";
    }
}