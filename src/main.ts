let age: number = 19;

for (let i = 1; i <= age; i++) {
    console.log(i);
}


if (age >= 18) {
    console.log("Volljährig.")
}

let score: number = 0;

if (score > 0) {
    console.log("Score is available")
}


if (score) {
    console.log("Score is evaluated as truthy")
} else {
    console.log("Score is evaluated as falsy")
}


const username: string = "";

if (username) {
    console.log("#1: The username is available!")
}

if (username) {
    console.log("#2: The Username is truthy")
} else {
    console.log("#2: The Username is falsy")
}


let isAdmin: boolean = false;

if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.")
} else {
    console.log("isAdmin is evaluated as falsy.")
}

if (!isAdmin) {
    console.log("isAdmin is false!")
}

const anzahl: number = 10;
const zeichen: string = "*";

for (let i = 1; i < anzahl + 1; i++) {

    let spaces: string = " ".repeat(anzahl - i);
    console.log(spaces + zeichen.repeat(i * 2 - 1));
}


for (let i = 0; i < anzahl; i++) {
    let spaces: string = " ".repeat(anzahl - 1);
    console.log(spaces + zeichen);
}

console.log("-----------");

for (let i = 1; i < anzahl * 2; i++) {
    if (i <= anzahl) {
        let spaces: string = " ".repeat(anzahl - i);
        console.log(spaces + zeichen.repeat(i * 2 - 1));
    }
    else
    {
        let spaces: string = " ".repeat(anzahl - 1);
        console.log(spaces + zeichen);
    }
}
