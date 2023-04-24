// Java Script document 

// Create an income object where you can put in the following information as attributes:

// - Name, as a string (E.g. Salary)
// - The amount, as a number (E.g. 4000)
// - Whether or not it is recurring, as a boolean

// Create 5 different objects to represent income from different places.

// Create an expenses object where you can put in the following information as attributes:
// - Name, as a string (E.g. Groceries)
// - The amount, as a number (E.g. 350)
// - Whether or not it is recurring, as a boolean

// Create 5 different objects to represent different expenses.

// Using a prompt box, display the income items and let the user add another entry.
// Using a prompt box, display the expenses items and let the user add another entry.

// Display the total amount of disposable income (income minus expenses)

// Using a prompt box, ask the user how much of their disposable income they would like to put into savings.
// Finally, create an alert to display the total amount of disposable income left.



// Income object constructor 
function Income(name, amount, recur) {
    this.name = String(name);
    this.amount = Number(amount);
    this.recur = Boolean(recur);
}

// Create 5 different objects to represent income from different places.
let income1 = new Income("Salary", 4000, true);
let income2 = new Income("Benefits", 1000, true);
let income3 = new Income("Car selling", 14000, false);
let income4 = new Income("Freelance", 3000, false);
let income5 = new Income("Room Lease", 1000, true);

let incomeArray = [income1, income2, income3, income4, income5];

// Expenses object constructor 
function Expenses(name, amount, recur) {
    this.name = String(name);
    this.amount = Number(amount);
    this.recur = Boolean(recur);
}

// Create 5 different objects to represent expenses from different places.
let expenses1 = new Expenses("Groceries", 600, false);
let expenses2 = new Expenses("Rent", 2000, true);
let expenses3 = new Expenses("Shopping", 1000, false);
let expenses4 = new Expenses("Fuel", 100, false);
let expenses5 = new Expenses("Transport", 200, false);

let expensesArray = [expenses1, expenses2, expenses3, expenses4, expenses5];


//the following function displays message with income objects, asks user to input object's attributes, creates an income object
//pushes it in the incomeArray and stores it in sessionStorage    
function addIncome() {
    let message = ""
    for (i = 0; i < incomeArray.length; i++) {
        message += `\nIncome: ${incomeArray[i].name}, Amount: ${incomeArray[i].amount}, Recurring: ${incomeArray[i].recur} `
    }

    let input = prompt(message + "\nWould you like to add another income? y/n")
    if (input == "y") {
        let incomeName = prompt("What kind of income do you want to add?");
        let incomeAmount = prompt(`Please enter amount for ${incomeName}`);
        let incomeRecur = prompt(`Is ${incomeName} recurring? y/n`)
            if (incomeRecur == "y") {
                incomeRecur = true;
            } if (incomeRecur == "n") {
                incomeRecur = false;
            }
        let newIncome = new Income(incomeName, incomeAmount, incomeRecur); //creates Income object 
        incomeArray.push(newIncome);
        sessionStorage.setItem("income", JSON.stringify(incomeArray)); //stringifies JSON from the incomeArray and stores it at the sessionStorage
    }
}
addIncome() // calls addIncome() function 

//the following function displays message with expenses objects, asks user to input object's attributes, creates an Expenses object
//pushes it in the expensesArray and stores in sessionStorage   

function addExpenses() {
    let message = ""
    for (i = 0; i < incomeArray.length; i++) {
        message += `\nExpenses: ${incomeArray[i].name}, Amount: ${incomeArray[i].amount}, Recurring: ${incomeArray[i].recur} `
    }

    let input = prompt(message + "\nWould you like to add other expenses? y/n")
    if (input == "y") {
        let expensesName = prompt("What kind of expenses do you want to add?");
        let expensesAmount = prompt(`Please enter amount for ${expensesName}`);
        let expensesRecur = prompt(`Is ${expensesName} recurring? y/n`)
            if (expensesRecur == "y") {
            expensesRecur = true;
            } if (expensesRecur == "n") {
            expensesRecur = false;
            }
        let newExpenses = new Expenses(expensesName, expensesAmount, expensesRecur); //creates Expenses object 
        expensesArray.push(newExpenses);
        sessionStorage.setItem("expenses", JSON.stringify(expensesArray));  //stringifies JSON from the expensesArray and stores it at the sessionStorage
    }
}

addExpenses() //calls addExpenses() function

// The following function displays the total amount of disposable income (income minus expenses)
// Using a prompt box, asks the user how much of their disposable income they would like to put into savings.
// Finally, creates an alert to display the total amount of disposable income left.

function displayTotal() {
    JSON.parse(sessionStorage.getItem("income")); //Gets an array of income objects from sessionStorage and parse 
    JSON.parse(sessionStorage.getItem("expenses")); //Gets an array of income objects from sessionStorage and parse 
    let totalExpenses = 0;
    for (i = 0; i < expensesArray.length; i++){
        totalExpenses += expensesArray[i].amount;
    }

    let message = ""
    let totalIncome = 0;
    for (i = 0; i < incomeArray.length; i++) {
        totalIncome += incomeArray[i].amount;
    }
    message += `\nTotal income: ${totalIncome}, \nTotal expenses: ${totalExpenses}, \nTotal disposable income (income minus expenses): ${totalIncome - totalExpenses} `

    let savings = Number(prompt(message + "\nHow much of your disposable income you would like to put into savings? ")); 
    alert(`Total amount of disposable income left: ${totalIncome - totalExpenses - savings}`)

    let newExpenses = new Expenses("Savings", savings, false); //creates Expenses object 
    expensesArray.push(newExpenses); //pushes newExpenses to the expensesArray

    sessionStorage.setItem("expenses", JSON.stringify(expensesArray)); //stringifies JSON from the expensesArray and stores it at the sessionStorage
    sessionStorage.setItem("income", JSON.stringify(incomeArray));     //stringifies JSON from the incomeArray and stores it at the sessionStorage
}


displayTotal() //calls displayTotal function 




