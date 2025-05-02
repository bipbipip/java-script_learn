let people =[
    {name: 'Alex', bill: 3000},
    {name: 'Ivan', bill: 2000},
    {name: 'Vadim', bill: 1000},
    {name: 'Vova', bill: 300}
];
// метод map
const multisalary = people.map(item=>item.bill*3);
console.log(multisalary);
const uptoten = people.map(item=>item.bill*1.1);
console.log(uptoten);
const lowsalary = people.map(item=> item.bill/3);
console.log(lowsalary);
// метод reduce
const sumsalary = people.reduce((sum, current) => sum += current.bill,0);
console.log(sumsalary);
// метод filter
const filteredsalary = people.filter(item => item.bill<500);
console.log(filteredsalary);
const filteredname = people.filter(item => item.name === "Vadim");
console.log(filteredname);
const filteredsalaryup =people.filter(item => item.bill >3000);
console.log(filteredsalaryup);
// метод concat
let people2 =[
    {name: 'Alex', bill: 3000},
    {name: 'Ivan', bill: 2000},
    {name: 'Vadim', bill: 1000},
    {name: 'Vova', bill: 300}
]
const union = people.concat(people2);
console.log(union);
//метод find
const findname = people.find(item=>item.name === "Alex");
console.log(findname);
const findsalary = people.find(item=>item.bill == 1000);
console.log(findsalary);
const findname2 = people.find(item=>item.name === "Vadim");
console.log(findname2);
// метод findIndex
const findindexsalary = people.findIndex(item => item.bill == 300);
console.log(people[findindexsalary]);
const findindexname = people.findIndex(item=>item.name === "Yura");
console.log(people[findindexname]);
// метод Push
const user = {name:'Ilya', bill: 2500};
const user2 = {name:'Vlad', bill: 1300};
const user3 = {name:'Artem', bill: 3400};
const user4 = {name:'German', bill: 600};
const user5 = {name:'Katya', bill: 2800};
const user6 = {name:'Gleb', bill: 1500};
people.push(user, user2 , user3, user4, user5, user6);

console.log(people);
// метод slice
console.log(people.slice(0,0));
console.log( "метод pop");
const arrayPeopleLength = people.length;
for (let i = 0; i < arrayPeopleLength; i++) {
    people.pop();
}
console.log(people);

// метод shift
console.log(people2.unshift(user2, user3), people2);
console.log(people2.shift(), people2.shift(), people2);
// метод every
const someName = people.some(item=>item.name === "Yura");
console.log(someName);
const everyName = people.every(item=>item.name === "Yura");
console.log(everyName);
// метод sort
let numbers =[
    3,25,63,51,4321,42
 ]
console.log(numbers.sort((a,b) => a - b));
console.log(numbers.sort((a,b) => b - a));

