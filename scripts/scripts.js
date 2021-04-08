'use strict';
const isNumber = function(n){
 return !isNaN(parseFloat(n)) && isFinite(n); 
};

const guessNumber = function (){
    let hiddenNumber = 12;
    let figure;
const guees = function (){
    if (hiddenNumber < figure){
        alert(' Загаданное число меньше');
        return guessNumber();
   }   
   else 
   if (hiddenNumber > figure) {
       alert(' Загаданное число больше');
       return guessNumber();
   }
    else {alert('"Поздравляю, Вы угадали!!!"');
   } 
};  
   figure = prompt ('Угадай число от 1 до 100 ');
      if (figure === null) {
         alert ('Игра окончена');
    } else
      if (!isNumber(figure)) {
         alert ('Введи число!');  guessNumber();
    } else { guees();}

}; 
guessNumber();

