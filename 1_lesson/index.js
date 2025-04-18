// 1 task
let x = 20;
let y = 58;
let z = 42;
console.log ("1 Task result:",x+y+z);

// 2 Task
const seconds = 60;
const minutes = 60;
const hours = 24;
const days = 365;
const myAgeInSeconds = 23*days*hours*minutes*seconds;
console.log("2 Task result:",myAgeInSeconds);

// Task 3
let count = 42;
let userName = '42';
let ToString = String(count);
let ToNumber = Number(userName);
let ToString2 = toString(count);
let ToNumber2= parseInt(userName);
console.log("Task 3 result:",typeof ToString, typeof ToNumber);
console.log("Task 3 result 2:",typeof ToString2, typeof ToNumber2);

// Task 4
let a =1;
let b =2;
let c ="белых медведей";
console.log("Task 4 result:",String(a)+String(b)+" "+c);

// Task 5
let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";
let lengthWords = word1+word2+word3+word4+word5;
console.log("Task 5 result:",lengthWords.length);

// Task 6
let per1 = "word";
let per2 = 228;
let per3 = true;
console.log(`Variable: per1 have type:`, typeof per1);
console.log(`Variable: per2 have type:`, typeof per2);
console.log(`Variable: per3 have type:`, typeof per3);

//Advanced level Task 1
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1]+codeWord2[1]+codeWord3[1]+codeWord4[1]+codeWord5[1];
console.log(cipher);

// normal level
// task 1
let ts_var1 = 'true';
let ts_var2 = false;
let ts_var3 = 17;
let ts_var4 = undefined;
let ts_var5 = null;
console.log(typeof ts_var1,typeof ts_var2,typeof ts_var3,typeof ts_var4,typeof ts_var5);

//  task 2
let height =15;
let width = 20;
if (height > width) {
    console.log(height);
}
else {
    console.log(width);
}
// task 3
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
//task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork =key && documents && pen && (apple || orange);
if (shouldGoToWork) {
    console.log("я все взял и могу идти на работу!");
}
else {
    console.log('кажется я что-то забыл');
}
// task 5



