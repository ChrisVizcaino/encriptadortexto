const textArea = document.querySelector(".cuadro_de_texto");
const respuesta = document.querySelector(".Respuesta_de_texto");
const quoteText = document.querySelector(".Respuesta_de_texto");
let handleCopyClick = document.querySelector('.btn3');

function buttonEncriptar(){
    let textoEncriptado = encriptar(textArea.value)
    respuesta.value = textoEncriptado
    textArea.value = "";
    respuesta.style.backgroundImage = "none"
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function buttonDesencriptar(){
    let textoDesencriptado = desencriptar(textArea.value)
    respuesta.value = textoDesencriptado
    textArea.value = "";
    respuesta.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

handleCopyClick.addEventListener('click', () => {

    navigator.clipboard.writeText(`${encriptar(textArea.value)}`);
  
    alert(`Copied to clipboard!`);
  });
