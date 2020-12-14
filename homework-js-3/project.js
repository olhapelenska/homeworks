//Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let start = 5;
let end = 15;
let result = 0;

for(let i = start; i <= end; i++) {
 result = i + result;
}
console.log(result);

// Запросить 2 числа и найти только наибольший общий делитель.
let a = 324;
let b = 162;
let i;
if(a < b) {
  i = a;
} else {
  i = b;
}
while (i > 0) {
  if (a % i == 0 && b % i == 0) {
  console.log(i);
    break;
  } 
  i--; 
}

// Запросить у пользователя число и вывести все делители этого числа.
let a = 60;
let i = a;
while (i > 0) {
  if (a % i == 0) {
  console.log(i);
  } 
  i--; 
}

// Определить количество цифр в введенном числе.
let number = 10;
let i = 0;

do {
number = Math.trunc(number / 10);
i++;
} while (number !== 0);

console.log(i);

// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
let positive = 0;
let negative = 0;
let zero = 0;
let countable = 0;
let uncountable = 0;

for (let i = 0; i < 10; i++) {
  let number = +prompt('Please, enter your number.');
  if (number > 0) {
    positive++
    if (number % 2 == 0) {
      countable++
    } else if (number % 2) {
      uncountable++
    }
  } else if (number < 0) {
    negative++
    if (number % 2 == 0) {
      countable++
    } else if (number % 2) {
      uncountable++
    }
  } else if (number == 0) {
    zero++
  } 
}

console.log(`positive numbers – ${positive}, negative numbers – ${negative}, zero – ${zero}, countable numbers – ${countable}, uncountable numbers – ${uncountable}`);

// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
let confirmation;
do {
  let number1 = +prompt('enter number1');
  let operator = prompt('enter operator');
  let number2 = +prompt('enter number2');
  let result;
  if (operator == '*') {
    result = number1 * number2;
  } else if (operator == '/') {
    result = number1 / number2;
  } else if (operator == '+') {
    result = number1 + number2;
  } else if (operator == '-') {
    result = number1 - number2;
  }
  
  confirmation = confirm(`${result} wanna try again?`);
  
} while (confirmation);

// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
let userNumber = 102345;
let move = 2;
let i = 0;
let numberQuantity = userNumber;

do {
numberQuantity = Math.trunc(numberQuantity / 10);
i++;
} while (numberQuantity);

for(let j = 1; j <= move; j++) {
  userNumber = Math.trunc(userNumber / 10 ** (i-1)) + Math.trunc(userNumber % 10 ** (i-1) * 10);
}
console.log(userNumber);

// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
//Didn't manage to complete this one :(

// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
let result;
for (i = 2; i <= 9; i++) {
  for (j = 1; j <=10; j++) {
    result = i * j;
    console.log(`${i} * ${j} = ${result}`);
  }
}
// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
//Didn't manage to complete this one :(