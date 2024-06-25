function distribuiCaracter() {
    // seleciona o valor digitado
    const caracter = document.querySelector('#entrada').value;

    // limpa o campo de digitação
    document.querySelector('#entrada').value = '';

    // limpa espaços em branco nas extremidades da string
    caracter.trim();

    switch (caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            // adiciona o caracter no campo referente a números
            document.querySelector('#numeros').value += caracter;
            break;
    
        default:
            document.querySelector('#letras').value += caracter;
            break;
    }
}