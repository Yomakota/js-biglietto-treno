// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca.

// chiedere all'utente il numero di km che vuole percorrere
let km = parseInt(prompt ("insert travel distance"));

// chieder età all'utente
let age = parseInt(prompt ("insert your age"));

// biglietto senza sconti
let ticket_price = km * 0.21;

// va applicato uno sconto del 20 % per i minorenni.
if (age < 18) {
    
    ticket_price = ticket_price - (ticket_price * 20 / 100);

// va applicato uno sconto del 40 % per gli over 65.
} else if (age > 64) {

    ticket_price = ticket_price - (ticket_price * 40 / 100);

} else {

}


// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo)
document.getElementById('ticket_price').innerHTML = `<h1>Il prezzo finale del biglietto è di ${ticket_price.toFixed(2)} €.</h1>`;