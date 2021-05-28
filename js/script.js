//  Generare un numero random da 1 a 6,
//  sia per il giocatore sia per il computer.
//  Stabilire il vincitore, in base a chi fa il
//   punteggio più alto.


// generare un numero random per l'utente


  var utente = Math.floor(Math.random() *6) + 1;

  console.log(utente);


//   generare un numero random per il computer

  var computer = Math.floor(Math.random() *6) + 1;
  console.log(computer);
  var risultato ;

//   stabilire il vincitore in base al punteggio più alto

  if(utente > computer ){
      risultato = 'Hai vinto, solo fortuna..';

  } else if(computer > utente){
      risultato = 'Hai perso, come sempre è stato facile';
  }else{
      risultato = 'Hai pareggiato, fossi in te mi accontenterei..'
  }

  document.getElementById('numeri').innerHTML= risultato;
  document.getElementById('giocatore').innerHTML= utente;
  document.getElementById('cpu').innerHTML= computer;
  
  
