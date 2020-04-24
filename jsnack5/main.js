// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

//Chiedo all'utente quanti numeri vuole visualizzare come cubo e a partire da che numero
var quantita = parseInt(prompt("Di quanti numeri vuoi calcolare il cubo?"));
var num_partenza= parseInt(prompt("Da quale numero vuoi cominciare il conteggio?"));

//Stampo a video i dati riguardanti le richieste dell'dati_utente
document.getElementById("dati_utente").insertAdjacentHTML("beforeEnd","<p>Hai chiesto di calcolare il cubo di " + quantita + " numeri</p>");
document.getElementById("dati_utente").insertAdjacentHTML("beforeEnd","<p>Il calcolo comincia dal numero " + num_partenza + "</p>");

//Calcolo e stampo il numero
for (i = num_partenza; i < (num_partenza + quantita); i++) {
    document.getElementById("base").insertAdjacentHTML("beforeEnd","<li>" + i + "</li>");
    document.getElementById("potenza").insertAdjacentHTML("beforeEnd","<li>" + (i * i * i) + "</li>");
    console.log(i * i * i);
}
