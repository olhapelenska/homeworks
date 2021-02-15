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
