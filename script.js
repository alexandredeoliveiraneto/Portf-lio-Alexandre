const textArray = [
    "Desenvolvedor Front-End. UI|UX."
];

let textIndex = 0;
let charIndex = 0;
const textElement = document.getElementById('text');
const pElement = document.querySelector('p.text-typed');

function type() {
    if (charIndex < textArray[textIndex].length) {
        textElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        pElement.style.fontSize = "2.5rem";
        pElement.style.color = "gray" 
        setTimeout(type, 50); // Reduzir o atraso entre as letras para 50ms
    } else {
        setTimeout(erase, 1000); // Espere um segundo antes de começar a apagar
    }
}

function erase() {
    if (charIndex > 1) {
        textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Reduzir o atraso entre as letras apagadas para 50ms
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500); // Espere meio segundo antes de começar a digitar a próxima frase
    }
}

setTimeout(type, 1000); // Comece após um segundo de carregamento da página


