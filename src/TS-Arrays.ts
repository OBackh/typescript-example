//Step 1: map & double each element

const numbers: number[] = [2,4,6,8];
const doubledNumbers: number[] = numbers.map(n => n * 2);
console.log("\nOriginal Array:\n"+numbers+"\nDoubled Numbers:\n"+doubledNumbers);

// Step 2: Filter words longer than 5 letters

const words: string[] = ["Car", "Dictionary", "Computer", "Mouse", "Rocket"];
const onlyLongWords: string[] = words.filter(word => word.length > 5);
console.log("\nOriginal Arry:\n"+ words+"\nWords longer than 5 Letters:\n" + onlyLongWords+"\n");

//Step 3: Sum

const numbers2: number[] = [2,4,6,8];
const numbers2sum: number[] = numbers2.reduce((prev: number, currentValue: number) => prev + currentValue);
console.log("\nOriginal Arry:\n"+ numbers2+"\nSum of all entrys:\n" + numbers2sum+"\n");

// Step 4: Is one entry greater than 10?

const numbers3: number[] = [2,4,6,8,10,12,14];
const numbersGt10: number[] = numbers3.some(n => n > 10);
console.log("Is one element greater than 10 in this array?\n"+numbers3+"\nAnswer: "+numbersGt10);