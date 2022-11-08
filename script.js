let nome, cognome, colore_preferito;

nome = prompt("Inserisci il nome");
cognome = prompt("Inserisci il cognome");
colore_preferito = prompt("Inserisci il tuo colore preferito");

console.log (
    `
    ------------ Informazioni anagrafiche ------------
    Nome: ${nome}
    Cognome: ${cognome}

    ------------ Colore preferito ------------

    Colore preferito: ${colore_preferito}

    ------------ Password Gen ------------
    Password: ${nome + cognome + colore_preferito + "21"}
    `
);