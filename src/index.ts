#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000;
let myPin = 9876;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter a pin number",
        type: "number"
    }]
);
if (pinAnswer.pin === myPin) {
    console.log("Your pin is Correct, Seccusfully Logged in")
;

let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "Please select an option:",
        type: "list",
        choices: ["Fast Cash", "Cash Withdrawl", "Check Balance"]
    }]
);
if (operationAns.operation === "Fast Cash") {
    let fastCashAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "Select one option",
                type: "list",
                choices: ["1000", "3000", "5000", "10000", "20000"]
            }
        ]
    );
    if (fastCashAns.amount <= myBalance) {
        let balance = myBalance - fastCashAns.amount
        console.log(`Your current balance is ${balance}`)
    } else {
        console.log("Your balance is insufficient")
    }

}
else if (operationAns.operation === "Cash Withdrawl") {
    let amountAns = await inquirer.prompt([{
        name: "amount",
        message: "Select Amount",
        type: "number"
    }])
    if (amountAns.amount <= myBalance) {
        let balance2 = myBalance - amountAns.amount
        console.log(`Your remaining balance is ${balance2}`);
    } else {
        console.log("Your balance is insufficient")
    }
}
else if (operationAns.operation === "Check Balance") {
    console.log(`Your current balance is ${myBalance}`)
}

}else {
    console.log("Your pin is Incorrect")
}
