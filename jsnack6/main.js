// JSnack 6: Stampa le potenze di 2 fino a 1000

//Creo un ciclo for per aumentare la potenza fino ai risultati minori di 1000, salvandolo via via in result e stampandolo a schermo
var result = 0;

for (i=0; result < 1000; i++) {
    result = Math.pow(2, i);
    if (result < 1000) {
        document.getElementById('result').insertAdjacentHTML("beforeEnd", "<li>" + result + "</li>")
        console.log(result);
    }
}
