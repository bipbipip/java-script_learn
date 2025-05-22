// // 1 task
function calPoints(operations) {
    const operators = {'+':'+','D':'D','C':'C'};
    const stack = [];
    for (let i = 0; i< operations.length; i++) {
        const item = operations[i];
        const operator = operators[item];

        if (operator) {
            const second = stack.at(-2);
            const first = stack.at(-1);

            if (operator === '+') {
                stack.push(first + second);

            } else if (operator === 'D') {
                stack.push(first * 2);

            }
                else if (operator === 'C') {
                stack.pop();
            }
        } else {
            stack.push(+item);
        }
    }
     const sum = stack.reduce((acc, item) => acc+item, 0);
     console.log(sum);
    return stack;

}
console.log(calPoints(["5","2","C","D","+"]));
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));
console.log(calPoints(["1","C"]));

// 2 task
function backspaceCompare(s,t) {
    const stack1 = [];
    const stack2 = [];
    for (let letter of s) {
        if (letter === '#') {
            stack1.pop();
        } else {
            stack1.push(letter);
        }
    }
    for (let letter of t) {
        if (letter === '#') {
            stack2.pop();
        } else {
            stack2.push(letter);
        }
    }
    return stack1.toString() === stack2.toString();
}

console.log(backspaceCompare("ab#c", 'ad#c'));
console.log(backspaceCompare("ab##", 'c#d#'));
console.log(backspaceCompare("a#c", 'b'));

// 3 task
 function removeDuplicates(s){
     const stack = [];
    for (let i=0; i <s.length; i++) {


        if (s[i] === stack[stack.length-1]){
            stack.pop()
        }
        else {
            stack.push(s[i]);
        }
    }
    return stack;

 }
 console.log(removeDuplicates('abbaca'));
 console.log(removeDuplicates('azxxzy'));

 // 4 task
 function isValid(s) {
     const stack = [];
     const operators = { ')': '(', ']':'[', '}':'{' }

     for (let i=0; i<s.length; i++) {
        let a=s[i];

        if (stack.length !==0 && operators[a] === stack[stack.length-1]) {
            stack.pop();
        }
        else {
            stack.push(a);
        }
     }
     return !stack.length;
 }

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('((((((((((((()))))()))))()))))'));

// 5 task
function maxDepth(s) {
    let stack = [];
    let depth = 0;

    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
            if (depth < stack.length) {
                depth = stack.length;
            }
        }
            else if (s[i] === ')') {
                stack.pop();
            }
        }
    return depth;
}

console.log(maxDepth('(1+(2*3)+((8)/4))+1'));
console.log(maxDepth('(1)+((2))+(((3))'));
console.log(maxDepth('((((((((((((()))))()))))()))))'));

// 6 task
 function clearDigits(s) {
     let stack = [];

     for (let digit of s) {
         if ( isNaN(digit) ) {
             stack.push(digit);
         }
         else {
             stack.pop();
         }
     }
     return stack;
 }

console.log(clearDigits('abc'));
console.log(clearDigits('cb4'));
