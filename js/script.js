"use strict";

// // typeof

// const type = false;
// console.log(typeof (type));
// // alert

// console.log('До');
// alert('hugkjh');
// console.log('После');

// confirm
// const message = "Please confirm hotel reservation";
// const isComing = confirm(message);

// console.log(isComing);

// PROMPT
// let quantity = prompt('Введите количество товара');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof (quantity));

// NUMBER PARSEINT AND PARSEFLOAT
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(typeof(result));

//
// const sentence = "JavaScript is awesome";
// console.log(sentence.length);

// console.log(sentence.toUpperCase());


// let yearOfBirth = 2006;
// console.log(yearOfBirth); // 2006


// yearOfBirth = 2020;
// console.log(yearOfBirth);

// Переменным, объявленным через let, не обязательно сразу присваивать значение.


// console.log() это метод для вывода данных в консоль браузера,
// более детально с ним познакомимся позже.

// Если переменная объявлена как let, её значение можно перезаписать.



// let username;
// console.log(username); // undefined

//

// const message = "JavaScript is awesome!";
// console.log(message); // JavaScript is awesome!

// //
// const username = "Mango";
// console.log("Username is ", username, ". And i like it.", username, username); // Username is Mango

//
// const message = "JavaScript is awesome!";
//  alert(message);
// //

// Просим клиента подтвердить бронь на отель
// и сохраняем в переменную результат работы confirm
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

//
// Спрашиваем имя отеля в котором хотел бы остановится клиент
// и сохраняем в переменную результат вызова prompt.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

//
// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"


//
// const x = 10;
// const y = 5;

// // Сложение
// console.log(x + y); // 15

// // Вычитание
// console.log(x - y); // 5

// // Умножение
// console.log(x * y); // 50

// // Деление
// console.log(x / y); // 2

// // Остаток от деления
// console.log(x % y); // 0

// // Сложение с заменой (также есть для всех других операторов)
// let value = 50;

// // Аналогично записи value = value + 10;
// value += -45;
// console.log(value); // 15

// Операторы сравнения
// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

// // // ✅ Хорошо, приведение типов не выполняется
// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true

// Приведение к числу

// const valueA = "5";
// console.log(typeof Number(valueA));

// const valueB = "random string";
// console.log(valueB.length);
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"


// Методы Number.parseInt() и Number.parseFloat()

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN


// console.log(Number.parseFloat("5.00000px")); // 5
// console.log(Number.parseFloat("12.1qwe74")); // 12
// console.log(Number.parseFloat("12.462qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN






// Проверка на число

//  const validNumber = Number("51"); // 51
//  console.log(Number.isNaN(validNumber)); // false

//  const invalidNumber = Number("qweqwe"); // NaN
//  console.log(Number.isNaN(invalidNumber)); // true

//  const validNumber11 =  Number("vfgxfhf");


//  console.log(Number.isNaN(validNumber11));


// console.log(0.1 + 0.2 === 0.3); // false
// console.log((0.17 + 0.24).toFixed(2)); // 0.30000000000000004


// Math.floor(num) - возвращает наибольшее целое число,
// меньшее, либо равное указанному
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число,
// большее, либо равное указанному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа,
// округлённое до ближайшего целого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10