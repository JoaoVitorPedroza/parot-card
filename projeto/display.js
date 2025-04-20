var jogada_num;
var num_jogadas = 0; // Variável para contar o número de jogadas
//Acima temos Variaveis globais, ou seja: eu posso usar elas em outras partes do código.
while (true) {
    var jogadas = prompt("Com quantas cartas você quer jogar ? (4, 6, 8, 10, 12 ou 14 ?)");
    jogada_num = parseInt(jogadas);

    if ([4, 6, 8, 10, 12, 14].includes(jogada_num)) {
        break;
    } else {
        alert("Número inválido, tente novamente !");
    }
}
//o while foi o jeito que eu encontrei
//para fazer o usuario ser obrigado a escolher um número de cartas existente.
function criar_e_embaralhar_cartas(num_cartas) {
    const pares_de_imagens = [
        "imagens_projeto/bobrossparrot.gif",
        "imagens_projeto/explodyparrot.gif",
        "imagens_projeto/fiestaparrot.gif",
        "imagens_projeto/metalparrot.gif",
        "imagens_projeto/revertitparrot.gif",
        "imagens_projeto/tripletsparrot.gif",
        "imagens_projeto/unicornparrot.gif"
    ];

    const num_pares = num_cartas / 2;
    const cartas_selecionadas = pares_de_imagens.slice(0, num_pares);
    const todas_as_cartas = [...cartas_selecionadas, ...cartas_selecionadas];
    todas_as_cartas.sort(() => Math.random() - 0.5);
    return todas_as_cartas;
}
//acima foi a função que eu separei para deixar as cartas aleatorias e fazer o jogo variar a cada jogada
function iniciar_jogo(num_cartas) {
    const cartas_embaralhadas = criar_e_embaralhar_cartas(num_cartas);
    const todos_os_img = document.querySelectorAll(".img_pri, .img_pri2, .img_pri3, .img_pri4, .img_pri5, .img_pri6, .img_pri7");

    todos_os_img.forEach(img => img.style.display = "none");

    let imagens_para_exibir = [];
    if (num_cartas === 14) {
        imagens_para_exibir = document.querySelectorAll(".img_pri, .img_pri2, .img_pri3, .img_pri4, .img_pri5, .img_pri6, .img_pri7");
    } else if (num_cartas === 12) {
        imagens_para_exibir = document.querySelectorAll(".img_pri, .img_pri2, .img_pri3, .img_pri4, .img_pri5, .img_pri6");
    } else if (num_cartas === 10) {
        imagens_para_exibir = document.querySelectorAll(".img_pri, .img_pri2, .img_pri3, .img_pri4, .img_pri5");
    } else if (num_cartas === 8) {
        imagens_para_exibir = document.querySelectorAll(".img_pri, .img_pri2, .img_pri3, .img_pri4");
    } else if (num_cartas === 6) {
        imagens_para_exibir = document.querySelectorAll(".img_pri, .img_pri2, .img_pri3");
    } else if (num_cartas === 4) {
        imagens_para_exibir = document.querySelectorAll(".img_pri, .img_pri2");
    }

    imagens_para_exibir.forEach((img, index) => {
        img.style.display = "inline-block";
        img.dataset.par = cartas_embaralhadas[index];
        img.src = "imagens_projeto/back.png";
    });

    num_jogadas = 0; // Isso vai fazer a contagem reiniciar quando o jogo começar novamente
    algotitimo();
}

if (jogada_num) {
    iniciar_jogo(jogada_num);
}

function algotitimo() {
    const cartas = document.querySelectorAll("[data-par]");
    let primeira_carta = null;
    let segunda_carta = null;
    let pode_virar = true;
    let cartas_encontradas = 0; // Para verificar se todas as cartas foram encontradas

    function virar_carta(carta) {
        if (!pode_virar || carta === primeira_carta || carta.classList.contains("virada")) {
            return;
        }

        num_jogadas++; // Incrementa o contador de jogadas
        carta.style.transform = "rotateY(180deg)";
        carta.src = carta.dataset.par;
        carta.classList.add("virada");

        if (!primeira_carta) {
            primeira_carta = carta;
        } else {
            segunda_carta = carta;
            pode_virar = false;

            if (primeira_carta.dataset.par === segunda_carta.dataset.par) {
                // Cartas iguais
                primeira_carta = null;
                segunda_carta = null;
                pode_virar = true;
                cartas_encontradas += 2; // aqui é apenas o encremento de cartas encontradas

                // esse if aqui é para verificar se todas as cartas foram encontradas
                if (cartas_encontradas === cartas.length) {
                    setTimeout(() => {
                        alert(`Você ganhou em ${num_jogadas} jogadas!`);
                        // Aqui foi a parte de mostrar a pontuação
                    }, 500);
                }
            } else {
                // Cartas diferentes
                setTimeout(() => {
                    primeira_carta.style.transform = "rotateY(0deg)";
                    primeira_carta.src = "imagens_projeto/back.png";
                    segunda_carta.style.transform = "rotateY(0deg)";
                    segunda_carta.src = "imagens_projeto/back.png";
                    primeira_carta.classList.remove("virada");
                    segunda_carta.classList.remove("virada");
                    primeira_carta = null;
                    segunda_carta = null;
                    pode_virar = true;
                }, 1000);
            }
        }
    }

    cartas.forEach(carta => {
        carta.addEventListener("click", () => virar_carta(carta)); //nessa parte eu coloquei o evento de click para virar a carta
    });
}