// let age = +prompt('Age?');
// let message = (age <= 2) ? 'Baby' :
//   (age <= 12) ? 'Child' :
//   (age <= 18) ? 'Teenager' :
//   (age <= 60) ? 'Adult' :
//   (age <= 120) ? 'Old' :
//   'Thats an unusual age!';
// alert( message );
// let number = +prompt('Enter a number from 1 to 9.');
// let message = (number === 1) ? '!' :
//   (number === 2) ? '@' :
//   (number === 3) ? '#' :
//   (number === 4) ? '$' :
//   (number === 5) ? '%' :
//   (number === 6) ? '^' :
//   (number === 7) ? '&' :
//   (number === 8) ? '*' :
//   (number === 9) ? '(' :
//   'Thats more than 9!';
// alert( message );
// let year = +prompt('Enter any year.');
//   let result = (year % 400 == 0) ? 'vysokosniy' :
//   (year % 4 == 0) ? 'vysokosniy' :
//   (year % 100 == 0) ? 'nevysokosnyi' :
//   'nevysokosnyi';
// let number = +prompt('Enter a 5 digit number');
// let result = (((number % 10) == (Math.floor(number / 10000))) && ((Math.floor(number % 100 / 10)) == (Math.floor(number / 1000) % 10))) ? 'palindrom' : 'not palindrom'; 
// alert(result);
// let number = +prompt('Enter a 5 digit number');
// let result = (((number % 10) == ((number - number % 10000) / 10000)) && (((number % 100 - number % 10) / 10) == ((number - number % 1000) / 1000 % 10))) ? 'palindrom' : 'not palindrom'; 
// alert(result);
// let threeDigits = +prompt('enter a 3 digit number');
// let result = ((threeDigits % 10) == Math.floor(threeDigits % 100 / 10)) ? 'contains the same numbers' :
//   ((threeDigits % 10) == Math.floor(threeDigits / 100)) ? 'contains the same numbers' :
//   (Math.floor(threeDigits % 100 / 10) == Math.floor(threeDigits / 100)) ? 'contains the same numbers' :
//   'does not contain the same numbers';
// alert(result);
// let usd = +prompt('enter amount in dollars');
// let currency = prompt('which currency do you choose?');
// let eurCoef = 0.82;
// let uahCoef = 28.29;
// let aznCoef = 1.70;
// switch(currency) {
//   case 'EUR':
//     alert(usd * eurCoef);
//     break;
//   case 'UAH':
//     alert(usd * uahCoef);
//     break;
//   case 'AZN':
//     alert (usd * aznCoef);
//     break;
// }
"use strict";