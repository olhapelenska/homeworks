//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
let age = +prompt('Age?');

let message = (age <= 2) ? 'Baby' :
  (age <= 12) ? 'Child' :
  (age <= 18) ? 'Teenager' :
  (age <= 60) ? 'Adult' :
  (age <= 120) ? 'Old' :
  'Thats an unusual age!';

alert( message );

//Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
let number = +prompt('Enter a number from 1 to 9.');

let message = (number === 1) ? '!' :
  (number === 2) ? '@' :
  (number === 3) ? '#' :
  (number === 4) ? '$' :
  (number === 5) ? '%' :
  (number === 6) ? '^' :
  (number === 7) ? '&' :
  (number === 8) ? '*' :
  (number === 9) ? '(' :
  'Thats more than 9!';

alert( message );

//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
let year = +prompt('Enter any year.');

  let result = (year % 400 == 0) ? 'vysokosniy' :
  (year % 4 == 0) ? 'vysokosniy' :
  (year % 100 == 0) ? 'nevysokosnyi' :
  'nevysokosnyi';

//Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
let number = +prompt('Enter a 5 digit number');

let result = (((number % 10) == (Math.floor(number / 10000))) && ((Math.floor(number % 100 / 10)) == (Math.floor(number / 1000) % 10))) ? 'palindrom' : 'not palindrom'; 

alert(result);

//another variant
let number = +prompt('Enter a 5 digit number');

let result = (((number % 10) == ((number - number % 10000) / 10000)) && (((number % 100 - number % 10) / 10) == ((number - number % 1000) / 1000 % 10))) ? 'palindrom' : 'not palindrom'; 

alert(result);

//Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
let threeDigits = +prompt('enter a 3 digit number');

let result = ((threeDigits % 10) == Math.floor(threeDigits % 100 / 10)) ? 'contains the same numbers' :
  ((threeDigits % 10) == Math.floor(threeDigits / 100)) ? 'contains the same numbers' :
  (Math.floor(threeDigits % 100 / 10) == Math.floor(threeDigits / 100)) ? 'contains the same numbers' :
  'does not contain the same numbers';
alert(result);


//Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
let usd = +prompt('enter amount in dollars');
let currency = prompt('which currency do you choose?');
let eurCoef = 0.82;
let uahCoef = 28.29;
let aznCoef = 1.70;

switch(currency) {
  case 'EUR':
    alert(usd * eurCoef);
    break;
  case 'UAH':
    alert(usd * uahCoef);
    break;
  case 'AZN':
    alert (usd * aznCoef);
    break;
}

//Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
let amountOfPurchaise = +prompt('Enter the ammount paid.');

if(amountOfPurchaise > 500) {
  alert (amountOfPurchaise / 100 * 7);
} else if(amountOfPurchaise > 300) {
  alert (amountOfPurchaise / 100 * 5);
} else if (amountOfPurchaise >= 200) {
  alert (amountOfPurchaise / 100 * 3);
} else {
  alert ('you have no discount');
}
  
//Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
let circle = +prompt('enter circle length');
let square = +prompt('enter square perimetr');
let circleDiameter = circle / 3.14;
let squareSide = square / 4;

if(circleDiameter < squareSide) {
  alert('square can contain circle');
} else {
  alert('square can not contain circle');
}