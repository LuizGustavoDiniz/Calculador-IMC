
const calcular = document.querySelector('#calcular')

function imc() {
    const nome = document.querySelector('#nome').value
    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value
    const resultado = document.querySelector('#resultado')

    if (nome !== '' && peso !== '' && altura !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificação = ''

        if (valorIMC <= 18.5) {
            classificação = 'abaixo do peso'
        }
        else if (valorIMC <= 24.9) {
            classificação = 'com peso normal'
        }
        else if (valorIMC <= 29.9) {
            classificação = 'com sobrepeso'
        }
        else if (valorIMC <= 34.9) {
            classificação = 'com Obesidade grau 1'
        }
        else if (valorIMC <= 39.9) {
            classificação = 'com obesidade grau 2'
        }
        else {
            classificação = 'com obesidade grau 3'
        }






        resultado.textContent = `olá ${nome} \n seu IMC é ${valorIMC} \n e você esta ${classificação.toUpperCase()}. `

    } else {
        resultado.textContent = 'preencha os campos'
    }

}

calcular.addEventListener('click', imc)