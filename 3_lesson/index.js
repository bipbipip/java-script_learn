// let user = {
//     name: "John",
//     age: 30,
//     city: null,
// };
// const keys = Object.keys(user);
// console.log(keys);
// console.log('age' in user);
//
// //
// function removeKeys(keyOrKeys, user) {
// delete user[keyOrKeys];
// }
// //removeKeys('name', user);
// console.log(user);
//
// function updateKeys(keyOrKeys, valueOrValues, object) {
//     object[keyOrKeys] = valueOrValues;
// }
// updateKeys('age',16, user);
// console.log(user);
// //
// function isKeysExists() {
//     const keys = Object.keys(user);
//     console.log(keys);
// }
// isKeysExists();
//
// //
// function createObject(entries) {
//    return entries.map(([key,value]) => ({[key]: value}));
// }
//
// const entries = [['name', 'Ilya'], ['name', 'Alex']];
// let result =createObject(entries);
// console.log(result);
// //
// let user1 =
//     {
//         name: "Dave",
//         age: 25,
//         city: null,
//         sex: undefined,
//     }
// function objectWithoutNils(object) {
//  for (let key in object) {
//      if (object[key] === undefined || object[key] === null) {
//          delete object[key];
//
//      }
//  }
//  console.log(object);
// }
// objectWithoutNils(user1);
// function isPalindrome(s) {
//     const rawString = s.toLowerCase().replace(/[^a-z0-9]/gm, '');
//     return rawString === rawString.split('').reverse().join('');
// }
// console.log(isPalindrome('А роза упала на лапу Азора'));
// //
// function clamp(value, min, max) {
// if (min > max){
//     [min, max] = [max, min];
// }
// return Math.min(Math.max(value, min), max);
// }
// console.log(clamp(-1, 0, -2));
// console.log(clamp(5, 0, -2));
// console.log(clamp(2, 10, -3));
const a = [1,2,3];
const b = [4,5,6];
function insert(a,b, direction) {
    if (direction === "prepend" ) {
        return [...b, ...a];
    }
    return [...a, ...b];
}
insert(a,b);
console.log(insert(a,b, 'append'));
// const x = [1,2,3,4,5,6];
// function copyMass(a) {
//    //return a.slice(0);
//     return [...a];
//
// }
// console.log(copyMass(x));
// for (let i=1; i<=5; i++) {
//     setTimeout( function timer(){
//         console.log( i );
//     }, i*1000 );
// }


