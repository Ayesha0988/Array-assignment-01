//question 1
let fruits: string[] = ["apple","banana","mango","orange"];
console.log(fruits);
//question 2
let elements: string[]= ["10","20","30","40"];
console.log(elements);
//question 3
let thirdfruit = fruits[2];
console.log(thirdfruit);
//question 4
let numbers: number[] = [10,20,30,40];
numbers[1] =  25;
console.log(numbers);
//question 5
let fruit: string[] = ["apple","banana","mango","orange"];
fruit.push("grape");
console.log(fruit);
//question 6
let lastFruit = fruit.pop();
console.log(fruit);
//question 7
let firstFruit = fruit.shift();
console.log(fruit);
//question 8
fruit.unshift("kiwi");
console.log(fruit);
//question 9
fruit.splice(1, 2);
console.log(fruit);
//question 10
fruit.splice(2 ,0, "pineapple","pear" );
console.log(fruit);
//question 11
let citrusFruits = fruits.splice(0,2);
console.log(citrusFruits);
//question 12
let lasttwoFruits = fruits.splice(-2);
console.log(lasttwoFruits);