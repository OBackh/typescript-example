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

// Bonus

// Sort desc

const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
console.log("\nOriginal array 'list':\n"+list);
console.log("Array 'list' nach Anwendung von .some:\n" + list.sort((a, b) => a - b));

// Square

console.log("\nOriginal array 'list':\n"+list+"\nAll numbers squared:\n" + list.map(s => s * s));

// Remove lowest 2 and the highest 4

