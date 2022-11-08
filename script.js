let nome, cognome, colore_preferito, numero1, numero2;
let divisione, st_password, bon_password;

nome = prompt("Inserisci il nome");
cognome = prompt("Inserisci il cognome");
colore_preferito = prompt("Inserisci il tuo colore preferito");
numero1 = prompt("Inserisci un numero");
numero2 = prompt("Inserisci un altro numero");
divisione= numero1 / numero2;


st_password = nome + cognome + colore_preferito + "21";
bon_password = nome + cognome + colore_preferito + divisione;

console.log (
    `
    ------------ Informazioni anagrafiche ------------
    Nome: ${nome}
    Cognome: ${cognome}

    ------------ Colore preferito ------------

    Colore preferito: ${colore_preferito}

    ------------ Password Gen ------------
    --------------------------------------
    --------------------------------------
    --------------------------------------
    Password standard: ${nome + cognome + colore_preferito + "21"}
    --------------------------------------
    --------------------------------------
    --------------------------------------
    Password bonus: ${nome + cognome + colore_preferito + numero1/numero2}
    --------------------------------------
    -------------------------------------- 
    --------------------------------------
    `
);

document.getElementById("st_password").innerHTML = st_password;
document.getElementById("bon_password").innerHTML = bon_password;