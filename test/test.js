// Напишите функцию счётчик используя замыкания
// Напишите функцию случайного числа в заданных пределах,
// Напишите функцию, которая берет случайный элемент из массива,
// Напишите функцию, которая копирует объект,
// Напишите функцию которая перебирает объект, и возвращает все value объекта,
//     #TODO пример:,
// const object = {,
//     value: 1,,
// children: [,
//     {,
//     value: 2,,
//     children: [],,
// },,
// {,
//     value: 3,,
//         children: [,
//     {,
//     value: 4,,
//     children: [],,
// },,
//     {,
//         value: 5,,
//             children: [],,
//     },,
// ],,
// },
// ],,
// },
// *
// #TODO Ответ:,
// [ 1, 3, 2, 5, 4 ],
//     [1, 3, 5, 4, 2 ],
// *
// *
// */
//1  Напишите функцию счётчик используя замыкания
// function counter() {
//     let number = 1;
//     return function () {
//         console.log(number);
//         number++;
//     }
// }
//
// let func = counter();
// func();
// func();
// func();
//
// //2 Напишите функцию случайного числа в заданных пределах,
// function random(min, max) {
//
//     let result = Math.floor(Math.random() * (max - min) + min);
//     console.log(result);
//     return result;
//
// }
//
// random(2, 8);
//
// //3 Напишите функцию, которая берет случайный элемент из массива
//
// function randMass(mass) {
//
//     let randomElem = random(0, mass.length - 1);
//     let randomItem = mass[randomElem];
//     console.log(randomItem);
//     return randomItem;
//
// }
//
// randMass(['a', 'b', 'c', 'd']);
// //4 Напишите функцию, которая копирует объект,
// let obj = {
//     name: 'John',
// }
// let obj2 = user;
// console.log(obj2);
// //5 Напишите функцию которая перебирает объект, и возвращает все value объекта,
//
//
//
//
// function fac(n) {
//     let result = 1;
//     for (; n>0; n--) {
//         result *= n;
//     }
//     return result;
// }
//
// console.log(fac(5));
