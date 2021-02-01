// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function checkMin(a,b) {
    if (a < b) {
        return -1;
    } else if (b < a) {
        return 1;
    } else {
        return 0;
    }
}

let a = prompt('Enter the 1st number');
let b = prompt('Enter the 2nd number');

checkMin(a,b);

// Написать функцию, которая вычисляет факториал переданного ей числа.
function calcFactorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
      result = i * result;
    }
    return result;
  }
  
alert(calcFactorial(7));

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function createOne(a,b,c) {
    let result;
    a = a + '';
    b = b + '';
    c = c + '';
    result = a + b + c;
    return result;
}
  
alert(createOne(1,4,9));

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function getS(a,b) {
    let result;
    if (b === undefined) {
      result = a * a;
    } else {
      result = a * b;
    }
    return result;
}
  
alert(getS(4));

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function checkPerfectNumber(n) {
    let result = 0;
    for (let i = 1; i < n; i++) {
      if (n % i == 0) {
        result = i + result;
      }
    }
    if (result === n) {
      return result;
    }
}

alert(checkPerfectNumber(28));

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
function getPerfectNumbers(a,b) {
    for (let j = a; j <= b; j++) {
      if (!checkPerfectNumber(j)) continue;
      console.log(j);
    }
  }
  
function checkPerfectNumber(n) {
    let result = 0;
    for (let i = 1; i < n; i++) {
      if (n % i == 0) {
        result = i + result;
      }
    }
    if (result === n) {
      return result;
    }
}
  
getPerfectNumbers(2,1000);

// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function getTime(hours, minutes = '00', seconds = '00') {
    let result = hours + ":" + minutes + ":" + seconds;
    return result;
}
  
getTime(6);

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function getTime(hours, minutes = 00, seconds = 00) {
    hours = hours * 3600;
    minutes = minutes * 60;
    let result = hours + minutes + seconds;
    return result;
}
  
getTime(1, 1, 1);

// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
//still working on this one, for now I got this:
function getTime(seconds) {
    let minutes = Math.trunc(seconds / 3600);
    let hours = Math.trunc(seconds / 3660);
    let newSeconds = seconds % 3660;
    let result = hours + ":" + minutes + ":" + newSeconds;
    return result;
  }
  
  alert(getTime(3661));
  
// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»