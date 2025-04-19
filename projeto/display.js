var jogada_num;

while (true) {
    var jogadas = prompt("Com quantas cartas você quer jogar ? (4, 6, 8, 10, 12 ou 14 ?)");
    jogada_num = parseInt(jogadas);

    if ([4, 6, 8, 10, 12, 14].includes(jogada_num)) {
        break; // Sai do loop se o número for válido
    } else {
        alert("Número inválido, tente novamente !");
    }
}

if (jogada_num) {
    // Restante do seu código para mostrar/esconder as cartas e chamar algotitimo()
    if (jogada_num === 14) {
        document.querySelectorAll(".img_pri").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri2").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri3").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri4").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri5").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri6").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri7").forEach(img => img.style.display = "inline-block");
        algotitimo();
    } else if (jogada_num === 12) {
        document.querySelectorAll(".img_pri").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri2").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri3").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri4").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri5").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri6").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri7").forEach(img => img.style.display = "none");
        algotitimo();
    } else if (jogada_num === 10) {
        document.querySelectorAll(".img_pri").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri2").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri3").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri4").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri5").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri6").forEach(img => img.style.display = "none");
        document.querySelectorAll(".img_pri7").forEach(img => img.style.display = "none");
        algotitimo();
    } else if (jogada_num === 8) {
        document.querySelectorAll(".img_pri").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri2").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri3").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri4").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri5").forEach(img => img.style.display = "none");
        document.querySelectorAll(".img_pri6").forEach(img => img.style.display = "none");
        document.querySelectorAll(".img_pri7").forEach(img => img.style.display = "none");
        algotitimo();
    } else if (jogada_num === 6) {
        document.querySelectorAll(".img_pri").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri2").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri3").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri4").forEach(img => img.style.display = "none");
        document.querySelectorAll(".img_pri5").forEach(img => img.style.display = "none");
        document.querySelectorAll(".img_pri6").forEach(img => img.style.display = "none");
        document.querySelectorAll(".img_pri7").forEach(img => img.style.display = "none");
        algotitimo();
    } else if (jogada_num === 4) {
        document.querySelectorAll(".img_pri").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri2").forEach(img => img.style.display = "inline-block");
        document.querySelectorAll(".img_pri3").forEach(img => img.style.display = "none");
        document.querySelectorAll(".img_pri4").forEach(img => img.style.display = "none");
        document.querySelectorAll(".img_pri5").forEach(img => img.style.display = "none");
        document.querySelectorAll(".img_pri6").forEach(img => img.style.display = "none");
        document.querySelectorAll(".img_pri7").forEach(img => img.style.display = "none");
        algotitimo();
    }
} 
function algotitimo() {
    var imagens = document.querySelectorAll(".img_pri");
    for (var x = 0; x < imagens.length; x++) {
        imagens[x].addEventListener("click", display);
    }

    function display(event) {
        if (event.target.src.endsWith("imagens_projeto/back.png")) {
            event.target.style.transform = "rotateY(180deg)";
            event.target.src = "imagens_projeto/bobrossparrot.gif";
        } else {
            event.target.src = "imagens_projeto/back.png";
            event.target.style.transform = "rotateY(0deg)";
        }
    }

    var imagens2 = document.querySelectorAll(".img_pri2");
    for (var x = 0; x < imagens2.length; x++) {
        imagens2[x].addEventListener("click", display2);
    }

    function display2(event) {
        if (event.target.src.endsWith("imagens_projeto/back.png")) {
            event.target.style.transform = "rotateY(180deg)";
            event.target.src = "imagens_projeto/explodyparrot.gif";
        } else {
            event.target.src = "imagens_projeto/back.png";
            event.target.style.transform = "rotateY(0deg)";
        }
    }

    var imagens3 = document.querySelectorAll(".img_pri3");
    for (var x = 0; x < imagens3.length; x++) {
        imagens3[x].addEventListener("click", display3);
    }

    function display3(event) {
        if (event.target.src.endsWith("imagens_projeto/back.png")) {
            event.target.style.transform = "rotateY(180deg)";
            event.target.src = "imagens_projeto/fiestaparrot.gif";
        } else {
            event.target.src = "imagens_projeto/back.png";
            event.target.style.transform = "rotateY(0deg)";
        }
    }

    var imagens4 = document.querySelectorAll(".img_pri4");
    for (var x = 0; x < imagens4.length; x++) {
        imagens4[x].addEventListener("click", display4);
    }

    function display4(event) {
        if (event.target.src.endsWith("imagens_projeto/back.png")) {
            event.target.style.transform = "rotateY(180deg)";
            event.target.src = "imagens_projeto/metalparrot.gif";
        } else {
            event.target.src = "imagens_projeto/back.png";
            event.target.style.transform = "rotateY(0deg)";
        }
    }

    var imagens5 = document.querySelectorAll(".img_pri5");
    for (var x = 0; x < imagens5.length; x++) {
        imagens5[x].addEventListener("click", display5);
    }

    function display5(event) {
        if (event.target.src.endsWith("imagens_projeto/back.png")) {
            event.target.style.transform = "rotateY(180deg)";
            event.target.src = "imagens_projeto/revertitparrot.gif";
        } else {
            event.target.src = "imagens_projeto/back.png";
            event.target.style.transform = "rotateY(0deg)";
        }
    }

    var imagens6 = document.querySelectorAll(".img_pri6");
    for (var x = 0; x < imagens6.length; x++) {
        imagens6[x].addEventListener("click", display6);
    }

    function display6(event) {
        if (event.target.src.endsWith("imagens_projeto/back.png")) {
            event.target.style.transform = "rotateY(180deg)";
            event.target.src = "imagens_projeto/tripletsparrot.gif";
        } else {
            event.target.src = "imagens_projeto/back.png";
            event.target.style.transform = "rotateY(0deg)";
        }
    }

    var imagens7 = document.querySelectorAll(".img_pri7");
    for (var x = 0; x < imagens7.length; x++) {
        imagens7[x].addEventListener("click", display7);
    }

    function display7(event) {
        if (event.target.src.endsWith("imagens_projeto/back.png")) {
            event.target.style.transform = "rotateY(180deg)";
            event.target.src = "imagens_projeto/unicornparrot.gif";
        } else {
            event.target.src = "imagens_projeto/back.png";
            event.target.style.transform = "rotateY(0deg)";
        }
    }
}