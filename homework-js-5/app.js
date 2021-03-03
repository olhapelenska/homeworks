//1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

//Функция для вывода на экран информации об автомобиле;

//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let myCar = {
  manufacturer: "Ford",
  model: "Mustang",
  year: 1969,
  speed: 80,
  seeInfo: function () {
    console.log("manufacturer", this.manufacturer);
    console.log("model", this.model);
    console.log("year", this.year);
    console.log("speed", this.speed);
  },
  findTime: function (way) {
    let time = way / this.speed;
    let period = 4;
    if (time <= period) {
      return time;
    } else if (time % period == 0) {
      //makes sure it doesn't add 1 extra hour when we drove for another 4 hours
      return time + (time / period - 1);
    } else {
      return time + (time / period - (time % period));
    }
  },
};

console.log(myCar.seeInfo());
console.log(myCar.findTime(320));

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:

let fraction = {
  numerator: 4,
  denominator: 5,
  // Функция сложения 2-х объектов-дробей;
  sum: function (differentFraction) {
    if (this.denominator && differentFraction.denominator != 0) {
      return `${
        this.numerator * differentFraction.denominator +
        this.denominator * differentFraction.numerator
      } / ${this.denominator * differentFraction.denominator}`;
    }
  },
  // Функция вычитания 2-х объектов-дробей;
  sub: function (differentFraction) {
    if (this.denominator && differentFraction.denominator != 0) {
      return `${
        this.numerator * differentFraction.denominator -
        this.denominator * differentFraction.numerator
      } / ${this.denominator * differentFraction.denominator}`;
    }
  },
  // Функция умножения 2-х объектов-дробей;
  mult: function (differentFraction) {
    if (this.denominator && differentFraction.denominator != 0) {
      return `${this.numerator * differentFraction.numerator} / ${
        this.denominator * differentFraction.denominator
      }`;
    }
  },
  // Функция деления 2-х объектов-дробей;
  div: function (differentFraction) {
    if (
      this.denominator &&
      differentFraction.denominator &&
      differentFraction.numerator != 0
    ) {
      return `${this.numerator * differentFraction.denominator} / ${
        this.denominator * differentFraction.numerator
      }`;
    }
  },
  // Функция сокращения объекта-дроби.
};

let newFraction = {
  numerator: 1,
  denominator: 2,
};

console.log(fraction.sum(newFraction));
console.log(fraction.sub(newFraction));
console.log(fraction.mult(newFraction));
console.log(fraction.div(newFraction));

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов.

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let clock = {
  hours: 9,
  minutes: 10,
  seconds: 40,
  displayTime: function () {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  },
  changeMinutes: function (addMinutes) {
    let min = this.minutes + addMinutes;
    this.minutes = min % 60;
    this.hours += Math.trunc(min / 60);
    this.displayTime();
  },
  changeSeconds: function (addSeconds) {
    let sec = this.seconds + addSeconds;
    this.seconds = sec % 60;
    this.changeMinutes(Math.trunc(sec / 60));
  },
  changeHours: function (addHours) {
    this.hours += addHours;
    this.displayTime();
  },
};

clock.displayTime();
clock.changeMinutes(100);
clock.changeSeconds(10000);
clock.changeHours(50);
