//  Generare un numero random da 1 a 6,
//  sia per il giocatore sia per il computer.
//  Stabilire il vincitore, in base a chi fa il
//   punteggio più alto.


  var utente = Math.floor(Math.random() *6) + 1

  console.log(utente);

  var computer = Math.floor(Math.random() *6) + 1
  console.log(computer);

  if(utente > computer ){
      console.log('Hai vinto');

  } else{
      console.log('Hai perso');
  }
