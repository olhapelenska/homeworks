// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

let check = [
  {
    name: "coffee",
    "amount needed": 1,
    buy: true,
  },
  {
    name: "oats",
    "amount needed": 3,
    buy: false,
  },
  {
    name: "pasta",
    "amount needed": 2,
    buy: true,
  },
  {
    name: "tomatoes",
    "amount needed": 5,
    buy: false,
  },
  {
    name: "broccoli",
    "amount needed": 3,
    buy: true,
  },
];

let name = "name";

function info(shoppingList) {
  for (let item of shoppingList) {
    if (!item.buy) {
      console.log(`You are about to buy some ${item[name]}`);
    }
  }
  for (let item of shoppingList) {
    if (item.buy) {
      console.log(`You have already bought ${item[name]}`);
    }
  }
}

function addItem(newItem, shoppingList) {
  for (let item of shoppingList) {
    if (item.name === newItem.name && item.buy === newItem.buy) {
      item["amount needed"] += newItem["amount needed"];
      return shoppingList;
    } else {
      shoppingList.push(newItem);
      return shoppingList;
    }
  }
}

function markBought(boughtItem, shoppingList) {
  for (let item of shoppingList) {
    if (item.name === boughtItem) {
      item.buy = true;
      return shoppingList;
    }
  }
}

someOtherItem = {
  name: "coffee",
  "amount needed": 7,
  buy: true,
};

console.log(addItem(someOtherItem, check));
console.log(markBought("oats", check));
info(check);

// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

let check = [
  {
    name: "coffee",
    total: 1,
    price: 12,
    buy: true,
  },
  {
    name: "oats",
    total: 3,
    price: 2,
    buy: false,
  },
  {
    name: "pasta",
    total: 2,
    price: 6,
    buy: true,
  },
  {
    name: "tomatoes",
    total: 5,
    price: 9,
    buy: false,
  },
  {
    name: "broccoli",
    total: 3,
    price: 8,
    buy: true,
  },
];
let name = "name";

function info(shoppingList) {
  for (let item of shoppingList) {
    if (!item.buy) {
      console.log(`You are about to buy some ${item[name]}`);
    }
  }
  for (let item of shoppingList) {
    if (item.buy) {
      console.log(`You have already bought ${item[name]}`);
    }
  }
}

function totalPrice(shoppingList) {
  let result = 0;
  for (let item of shoppingList) {
    result += item.total * item.price;
  }
  console.log(result);
}

function maxPrice(shoppingList) {
  let mostExspensive = 0;
  let mostExspensiveItem;
  for (let item of shoppingList) {
    if (mostExspensive < item.total * item.price) {
      mostExspensive = item.total * item.price;
      mostExspensiveItem = item.name;
    }
  }
  return mostExspensiveItem;
}

function averagePrice(shoppingList) {
  let sum = 0;
  for (let item of shoppingList) {
    sum += item.price;
  }
  console.log(sum / shoppingList.length);
}

console.log(maxPrice(check));
info(check);
totalPrice(check);
averagePrice(check);

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let style = [
  {
    propertyName: color,
    propertyValue: red
  },
  {
    propertyName: font-size,
    propertyValue: 20px
  }  
]

function textStyle(style, text) {
  let string = "";
  for (let element of style) {
    string += ${element.propertyName}:${element.propertyValue};
}
  console.log(string);
  document.write(<p style=${string}>${text}</p>)
}

textStyle(style, askdasdlkasdjl);



// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^
const academyRooms = [
  { name: "45", capacity: 10, department: "Philology" },
  { name: "99", capacity: 20, department: "Journalism" },
  { name: "132", capacity: 15, department: "Mechanics" },
  { name: "216", capacity: 18, department: "Philology" },
  { name: "77", capacity: 16, department: "Journalism" },
  { name: "85", capacity: 14, department: "Philology" },
  { name: "146", capacity: 15, department: "Math" },
  { name: "36", capacity: 18, department: "Mechanics" },
  { name: "123", capacity: 10, department: "Math" },
  { name: "165", capacity: 20, department: "Journalism" },
  { name: "201", capacity: 14, department: "Mechanics" },
  { name: "230", capacity: 16, department: "Philology" },
];

// Вывод на экран всех аудиторий;
function displayRooms(arr) {
  for (let item of arr) {
    console.log(`This is the room #${item['name']} of the department of ${item['department']}, it has the capacity of ${item['capacity']} seats.`);
  }
}

displayRooms(academyRooms);

// Вывод на экран аудиторий для указанного факультета;
function displayDepartmentRooms(faculty, arr) {
  for (let item of arr) {
    if (item.department === faculty) {
      console.log(`This is the room #${item['name']} of the department of ${faculty}, it has the capacity of ${item['capacity']} seats.`);
    }
  }
}

displayDepartmentRooms('Philology', academyRooms);

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
function displayRoomByGroup(group, arr) {
  for (let item of arr) {
    if (item.department === group.department && item.capacity >= group.members) {
      console.log(`This is the room #${item['name']} of the department of ${item['department']}, it has the capacity of ${item['capacity']} seats and is suitable for ${group['name']}.`);
    }
  }
}

let ourGroup = {
  name: 'funny group',
  department: 'Journalism',
  members: 15,
}

displayRoomByGroup(ourGroup, academyRooms); 

// Функция сортировки аудиторий по количеству мест;
function sortByCapacity(arr) {
  arr.sort(function (a, b) {
    return a.capacity - b.capacity;
  });
  displayRooms(arr);
}

sortByCapacity(academyRooms);

// Функция сортировки аудиторий по названию (по алфавиту).
function sortAlphabetically(arr) {
  arr.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  displayRooms(arr);
}

sortAlphabetically(academyRooms);