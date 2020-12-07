"use strict";

//Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
var userName = prompt("What is your name?");
alert(userName); //Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

var userBirthYear = prompt("What is the year of your birth?");
var currentYear = 2020;
alert(currentYear - userBirthYear); //Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

var squareSideLength = prompt("What is the length of the side of a square?");
alert(squareSideLength * 4); //Запросите у пользователя радиус окружности и выведите площадь такой окружности.

var circleRadius = prompt("What is the radius of a circle?");
alert(3.14 * Math.pow(circleRadius, 2)); //Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

var distance = prompt("What is the distance in km between two cities?");
var time = prompt("In how many hours do you wanna be there?");
alert(distance / time); //Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

var dollarsAmount = prompt("Enter ammount in dollars.");
var euroCoefitient = 0.83;
alert(dollarsAmount * euroCoefitient); //Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

var flashCardSize = prompt("Enter the size of the flash drive in GB.");
flashCardSize = flashCardSize * 1000;
alert(Math.floor(flashCardSize / 820)); //Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

var total = prompt('enter how much money do yo have');
var chockolade = prompt('enter the price of the chocolade');
alert(Math.floor(total / chockolade)); //Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

var threeDigitNumber = prompt('Enter a three-digit number');
var threeDigitNumberBackwards = threeDigitNumber % 10 * 100 + Math.floor(threeDigitNumber % 100 / 10) * 10 + Math.floor(threeDigitNumber % 1000 / 100);
alert(threeDigitNumberBackwards); //Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

var sumPerTwoMonth = prompt('Enter an ammount of deposit for 2 months.');
var percentPerTwoMonths = 5 / 100 / 12 * 2;
alert(sumPerTwoMonth * percentPerTwoMonths); //работа с переменными

var admin;
var name;
name = "John";
admin = name;
alert(admin); //шаблонные строки