import {l} from "vite/dist/node/types.d-aGj9QkWt";

let age: number = 19;

for (let i = 1; i <= age; i++) {
    console.log(i);
};

if (age >= 18) {
    console.log("Volljährig.")
}

let score: number = 0;

if (score > 0) {console.log("Score is available")};

if (score){ console.log("Score is evaluated as truthy")}
else {console.log("Score is evaluated as falsy")};

const username: string = "";

if (username){console.log("#1: The username is available!")}

if (username){ console.log("#2: The Username is truthy")}
else {console.log("#2: The Username is falsy")};

let isAdmin: boolean = false;

if (isAdmin){console.log("isAdmin is evaluated as truthy.")}
else {console.log("isAdmin is evaluated as falsy.")}

if(!isAdmin){console.log("isAdmin is false!")}