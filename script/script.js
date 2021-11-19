// Carne - 500 gr por pessoa + de 6 hoaras - 1000
// Cerveja - 2000ml por pessoa + de 6 horas - 2800ml
// Refrigerante/agua - 1000ml por pessoa + de 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let aldultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantTotalCarne = carnePP(duracao) * aldultos + (carnePP(duracao)/2 * criancas);
    let quantTotalCerveja = cervejaPP(duracao) * aldultos;
    let quantTotalBebida = bebidaPP(duracao) * aldultos + (bebidaPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p><img src="image/icons8-bife-raro-16.png">${quantTotalCarne/1000} kg de carne </p>`;
    resultado.innerHTML += `<p><img src="image/icons8-lata-de-cerveja-16.png">${Math.ceil(quantTotalCerveja/355)}   latas de cerveja </p>`;
    resultado.innerHTML += `<p><img src="image/icons8-comida-fast-food-street-food-06-16.png">${Math.ceil(quantTotalBebida/1000)} l de bebida (agua/refrigerante) </p>`;
}

function carnePP(duracao){
    let carnePP = 500;
    if(duracao >= 6){
        return 1000;
    } else{
        return 500;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2800;
    } else{
        return 2000;
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}