

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
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - возвращает значение числа,
// // округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10

// Конкатенация строк

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy
// const words = "my love " + "love me.";
// console.log(words);

// const sentense = " I love him";
// console.log(sentense);

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

// Используя переменные необходимо составить строку с подставленными значениями
// const guestName = "Манго";
// const roomNumber = 207;
// const greeting =
//     " Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// // Шаблонные строки
// console.log(`Welcome ${guestName}, your room number is ${roomNumber}!`);

// Свойство length

// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47
// console.log("jfgkdfs  jfjlsdzfj jsskj ksdclkSdlWS;Jwoaskaka123er4 1233/".length);
    
//
// const message = "WelcometoBahamas!";
// console.log(message.indexOf("Ba")); // 9
// console.log(message.indexOf("hello")); // -1

// //
// const productName = "Ремонтный дроид";
// console.log(productName.includes("н")); // true


// // Метод endsWith()
// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// const word = "spase";
// console.log(word.endsWith("se"));
// console.log(word.endsWith("de"));





// Методы replace() и replaceAll()


// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// const motherName = "Ирина Малкина, Александра Малкина, Александр Малкин";
// const minifiedMotherName = motherName.replaceAll("Малкина", "Malkina");
// console.log(minifiedMotherName);


// // Метод slice()
// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// const productName1 = "Моя любимая мама";
// console.log(productName1.slice(1, productName1.length));

//Логическое «И»

// const age = 20;
// // console.log(age > 19 && age < 22); // true && true -> true
// console.log(age > 18 && age < 22);

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
//  console.log(false || 3); // 3
//  console.log(3 || true); // 3
//  console.log(true || 3); // true

//
// const x = 5;// Missing initializer in const declaration(Отсутствует инициализатор в объявлении константы)
// x = 10;//Assignment to constant variable. (Присвоение постоянной переменной.    )
      
// let x = 5;
// x = 19;
// console.log(x);

//
// const type =  7788;
// console.log(typeof type);

// console.log("before");
// alert("gfhgfky");
// console.log("after")

//
// const message = "Хотите продлить подписку?";
// const shouldRenew = confirm(message);
// console.log(shouldRenew);

//
// let quantity = prompt("Введите количество товаров");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = "34.2";
// const lementWidt = Number.parseInt(elementWidth);
// console.log(lementWidt);

// //
// let elementHeight = "200.56px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log("elementHeight: ", elementHeight);

//
// let salary = 1234.3456;
// salary = Number(salary.toFixed(2));

// console.log(Number(salary.toFixed(2)));

// "''
// console.log(Number(5/0));

// console.log(Math.PI);

// const base = 2;
// const power = 5;
// const result = base ** 5;
// console.log(result);


//
// let base = prompt("Введите число");
// base = Number(base);
// console.log(base);

// let power = prompt('Введите степень');
// power = Number(power);
// console.log(power);

// let result = base ** power;
// console.log(result);

//
// console.log(Math.random());


// const max = 69;
// const min = 30;
// const result = (Math.round(Math.random() *(max - min) + min));
// console.log(result);

 
// const colors = ["tomato", "teal", "orange", "deeppink", "skyblue", "green"];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];
// console.log(color);

// document.body.style.backgroundColor = color;


// const message = "В этой строке 26 символов.";
// console.log(message.length);


//
// const firstName = "Chelsy";
// const lastName = "Emerald";
// const fullName = firstName + " " + lastName;
// console.log(fullName);
// //
// const room = 716;
// const type = "VIP";
// console.log(room + " " + type);

//
// let brand = prompt("Напишите название бренда");
// brand = brand[0].toLowerCase() + brand.slice(1).toLowerCase();

// console.log(brand);

//

// const blackListedWord1 = "спам";
// const blackListedWord2 = "распродажа";

// const string1 = "Привет, я принц абдул, єто не спам, предлагаю Тебе миллион!";
// console.log(string1.includes(blackListedWord1));
// console.log(string1.includes(blackListedWord2));

// const string2 = "самая больщшая РАСПРОДАЖА этой недели, не пропустите!";
// console.log(string2.includes(blackListedWord1));
// const normalizedString2 = string2.toLowerCase()

// console.log(normalizedString2.includes(blackListedWord2));

// const string3 = "Рекламная компания #fatlivesmaster";
// console.log(string3.includes(blackListedWord1));
// console.log(string3.includes(blackListedWord2));

//  Операторы сравнения
// console.log(true > "23");
// console.log(Number(true));


// const isEqual = 1 !== true;
// console.log(isEqual);
// console.log(Number(null));


// console.log(Boolean("0"));

// console.log(0 && 6 && "hello");

// console.log(false || 0 || null || false);

// console.log(!"ghjjkk");

// const x1 = 10;
// const x2 = 30;
// const number = 25;

// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок до ${x2}?`, number > x2);
// const result = number > x1 && number < x2;
// console.log(`Число ${number} попадает в отрезок от ${x1} до  ${x2}?`, result);
// const  result2 = number < x1 || number > x2;
// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}?`, result2);

//
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;


// console.log("Можно открыть чат?", canOpenChat);
 

// const sub1 = "free";

// const canAccesContent= sub1==="pro"||sub1==="vip"
// console.log(canAccesContent);

// const salary = 1000;

// if (salary < 500) {
//     console.log("Уровень 1");
// } else if (salary > 500){
//     console.log("Уровень 2");
    
// 7.1

let balance = 10000;
const payment = 2000;
const sentense = confirm(`Общая стоимость заказа ${balance} кредитов. Проверяем кол-во доступных средств на счету.`);
console.log(sentense);

if  (payment < balance || payment === balance) {
    const result = balance - payment;
    console.log(`На счету осталось  ${result}кредитов.`)
} else (payment  > balance) {
    console.log("На счету недостаточно средств для проведения операции!");
}

console.log(confirm("Операция завершена!");

// 7.2 