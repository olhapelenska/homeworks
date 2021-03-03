// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
class Circle {
  // поле, хранящее радиус окружности;
  constructor(r) {
    this.r = r;
  }
  // get-свойство, возвращающее радиус окружности;
  get radius() {
    console.log(`radius is ${this.r}`);
  }
  // set-свойство, устанавливающее радиус окружности;
  set radius(newRadius) {
    this.r = newRadius;
  }
  // get-свойство, возвращающее диаметр окружности;
  get diametr() {
    console.log(`diametr is ${this.r * 2}`);
  }
  // метод, вычисляющий площадь окружности;
  circleSquare() {
    console.log(`square is ${(Math.PI * this.r ** 2).toFixed(2)}`);
  }
  // метод, вычисляющий длину окружности.
  circleLength() {
    console.log(`length is ${(2 * Math.PI * this.r).toFixed(2)}`);
  }
}

// Продемонстрировать работу свойств и методов.
let circle = new Circle(10);
circle.radius;
circle.radius = 8;
circle.radius;
circle.diametr;
circle.circleSquare();
circle.circleLength();

// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
class SimpleMarker {
  constructor(color, ink) {
    this.color = color;
    this.ink = ink;
  }
  print(stroke) {
    for (let letter of stroke) {
      if (letter != " ") {
        this.ink -= 0.5;
      }
    }
    document.write(`<p style="color: ${this.color}">${stroke}</p>`);
  }
}

class RefuelingMarker extends SimpleMarker {
  constructor(color, ink) {
    super(color, ink);
  }
  refuel(amount) {
    this.ink += amount;
  }
}

let newMarker = new RefuelingMarker("blue", 10);
newMarker.print("hello, how are you?");
newMarker.refuel(3);
console.log(newMarker.ink);

// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

new Employee("Sarah", "accountant"),
let bankEmployees = [
  new Employee("Tom", "cashier"),
  new Employee("Mila", "cleaning lady"),
  new Employee("Ben", "intern"),
  new Employee("Rebecca", "CEO"),
];

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }
  getHtml() {
    document.write("<table border='1px' cellpadding='3px' cellspacing='0'>");
    for (let person of this.employees) {
      document.write(`
      <tr>
      <td>${person.name}</td>
      <td>${person.position}</td>
      </tr>
      `);
    }
    document.write("</table>");
  }
}

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
let ourTable = new EmpTable(bankEmployees);
ourTable.getHtml();
