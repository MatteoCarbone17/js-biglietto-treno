/*Descrizione:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
   - il prezzo del biglietto è definito in base ai km (0.21 € al km)
   - va applicato uno sconto del 20% per i minorenni
   - va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/


let distanceRoad = parseFloat (prompt ('Quanti km percorrerai ?' ));
console.log (distanceRoad);

let ageUser = prompt ('Quanti anni hai ?' );
console.log (ageUser);

let ticketPrice = parseFloat ( distanceRoad * 0.21 );
console.log (ticketPrice)


let discountUnderAge =  parseFloat(ticketPrice * 0.2);
console.log ( discountUnderAge);

let discountOverAge = parseFloat (ticketPrice * 0.4); 
console.log ( discountOverAge) 

let priceDiscount;

if (ageUser < 18 ){
    priceDiscount = (ticketPrice - discountUnderAge)
    document.getElementById('output') .innerHTML = 'Il costo del biglietto è' + ' ' + priceDiscount.toFixed(2) + '&euro;'
} else if ( ageUser > 65 ) {
    priceDiscount = (ticketPrice - discountOverAge )
    document.getElementById('output') .innerHTML = 'Il costo del biglietto è' + ' ' + priceDiscount.toFixed(2) + '&euro;'
} else {
    document.getElementById('output') .innerHTML = 'Il costo del biglietto è' + ' ' + ticketPrice.toFixed(2) + '&euro;'
}
