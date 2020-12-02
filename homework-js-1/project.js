//Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
let userName = prompt("What is your name?");
alert(userName);

//Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
let userBirthYear = prompt("What is the year of your birth?");
const currentYear = 2020;
alert(currentYear - userBirthYear);

//Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
let squareSideLength = prompt("What is the length of the side of a square?");
alert(squareSideLength * 4);

//Запросите у пользователя радиус окружности и выведите площадь такой окружности.
let circleRadius = prompt("What is the radius of a circle?");
alert(3.14 * circleRadius ** 2);

//Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
let distance = prompt("What is the distance in km between two cities?");
let time = prompt("In how many hours do you wanna be there?");
alert(distance / time);

//Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
let dollarsAmount = prompt("Enter ammount in dollars.");
const euroCoefitient = 0.83;
alert(dollarsAmount * euroCoefitient);

//Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
let flashCardSize = prompt("Enter the size of the flash drive in GB.");
flashCardSize = flashCardSize * 1000;
alert(Math.floor(flashCardSize / 820));

//Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
let total = prompt('enter how much money do yo have');
let chockolade = prompt('enter the price of the chocolade');
alert(Math.floor(total / chockolade));

//Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
let threeDigitNumber = prompt('Enter a three-digit number');
let threeDigitNumberBackwards = (threeDigitNumber % 10 * 100) 
+ (Math.floor(threeDigitNumber % 100 / 10) * 10) 
+ (Math.floor(threeDigitNumber % 1000 / 100));
alert(threeDigitNumberBackwards);

//Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
let sumPerTwoMonth = prompt('Enter an ammount of deposit for 2 months.');
let percentPerTwoMonths = 5 / 100 / 12 * 2;
alert(sumPerTwoMonth * percentPerTwoMonths);

//работа с переменными
let admin;
let name;
name = "John";
admin = name;
alert(admin);

//шаблонные строки Что выведет этот скрипт?
let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

//Исправьте сложение
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(a + b); // 12

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);
alert(a + b); // 3

