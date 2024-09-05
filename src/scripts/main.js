document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 600
    });
    
    let btn = document.querySelector("#btn") 
    let hero = document.querySelector("#home").clientHeight
    let about = document.querySelector("#about").clientHeight

    function contagemRegressiva(){

        let aniversario = new Date("2025-03-30T00:00:00")
        let hoje = new Date()
        let diferencaTempo = aniversario - hoje
    
        let diasMs = 1000 * 60 * 60 * 24;
        let horasMs = 1000 * 60 * 60;
        let minutosMs = 1000 * 60;
    
        let dias = Math.floor(diferencaTempo / diasMs);
        let horas = Math.floor((diferencaTempo % diasMs) / horasMs);
        let minutos = Math.floor((diferencaTempo % horasMs) / minutosMs);
        let segundos = Math.floor((diferencaTempo % minutosMs) / 1000);
    
        if (diferencaTempo <= 1000 && diferencaTempo >= -1000){
            document.querySelector(".hero__counter").innerHTML = "Meu aniversário é hoje!!!";
        }
        else if (diferencaTempo < 0){
            document.querySelector(".hero__counter").innerHTML = "Meu aniversário ja se passou";
        }
        else {
            document.querySelector(".hero__counter").innerHTML = `Faltam ${dias}d : ${horas}h : ${minutos}m : ${segundos}s`;
        }
    }
    
    contagemRegressiva();
    setInterval(contagemRegressiva, 1000);

    window.addEventListener("scroll", () => {

        let posicaoAtual = window.scrollY;
        
        if (posicaoAtual < (hero - about)){
            btn.style.display = "none"
        }
        else {
            btn.style.display = "block"
        }
    })

})
