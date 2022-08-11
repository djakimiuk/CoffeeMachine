const latte = {water: 350, milk: 75, beans: 20, price: 7}
const cappuccino = {water: 200, milk: 100, beans: 12, price: 6}
let machineSupplies = {water: 400, milk: 540, beans: 120, cash: 550, cups: 9}
let buyOpt = "";
let fillWater = "";
let fillMilk = "";
let fillBeans = "";
let fillCups = "";
let amountOpt = "";

const chooseFunc = (value) => {
    switch (value) {

        case "buy":
            {buyOpt = Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, " +
                "back - to main menu:"));
                amountOpt = Number(input("How many cups do you want to buy?"))
                switch(buyOpt) {
                    case 1:
                        {if (machineSupplies.water - espresso.water * amountOpt < 0) {
                            return console.log("Sorry, not enough water!")
                        } else if (machineSupplies.milk - espresso.milk * amountOpt < 0) {
                            return console.log("Sorry, not enough milk!")
                        } else if (machineSupplies.beans - espresso.beans * amountOpt < 0) {
                            return console.log("Sorry, not enough coffee beans!")
                        } else if (machineSupplies.cups - 1 * amountOpt < 0) {
                            return console.log("Sorry, not enough cups!")
                        } else {
                            machineSupplies.water = machineSupplies.water - espresso.water * amountOpt ;
                            machineSupplies.milk = machineSupplies.milk - espresso.milk * amountOpt;
                            machineSupplies.beans = machineSupplies.beans - espresso.beans * amountOpt;
                            machineSupplies.cups = machineSupplies.cups - 1 * amountOpt;
                            machineSupplies.cash = machineSupplies.cash + espresso.price * amountOpt;
                            return console.log("I have enough resources, making you a coffee!")
                            }}
                    break;

                    case 2:
                        {if (machineSupplies.water - latte.water < 0) {
                            return console.log("Sorry, not enough water!")
                        } else if (machineSupplies.milk - latte.milk * amountOpt < 0) {
                            return console.log("Sorry, not enough milk!")
                        } else if (machineSupplies.beans - latte.beans * amountOpt < 0) {
                            return console.log("Sorry, not enough coffee beans!")
                        } else if (machineSupplies.cups - 1 * amountOpt < 0) {
                            return console.log("Sorry, not enough cups!")
                        } else {
                            machineSupplies.water = machineSupplies.water - latte.water * amountOpt
                            machineSupplies.milk = machineSupplies.milk - latte.milk * amountOpt
                            machineSupplies.beans = machineSupplies.beans - latte.beans * amountOpt
                            machineSupplies.cups = machineSupplies.cups - 1 * amountOpt
                            machineSupplies.cash = machineSupplies.cash + latte.price * amountOpt
                            return console.log("I have enough resources, making you a coffee!")
                        }}
                    break;

                    case 3:
                        {if (machineSupplies.water - cappuccino.water * amountOpt < 0) {
                            return console.log("Sorry, not enough water!")
                        } else if (machineSupplies.milk - cappuccino.milk * amountOpt < 0) {
                            return console.log("Sorry, not enough milk!")
                        } else if (machineSupplies.beans - cappuccino.beans * amountOpt < 0) {
                            return console.log("Sorry, not enough coffee beans!")
                        } else if (machineSupplies.cups - 1 * amountOpt < 0) {
                            return console.log("Sorry, not enough cups!")
                        } else {
                            machineSupplies.water = machineSupplies.water - cappuccino.water * amountOpt;
                            machineSupplies.milk = machineSupplies.milk - cappuccino.milk * amountOpt;
                            machineSupplies.beans = machineSupplies.beans - cappuccino.beans * amountOpt;
                            machineSupplies.cups = machineSupplies.cups - 1 * amountOpt;
                            machineSupplies.cash = machineSupplies.cash + cappuccino.price * amountOpt;
                            console.log("I have enough resources, making you a coffee!");
                        }}
                        break;
                }}
            break;

        case "fill":
            {fillWater = Number(input("Write how many ml of water you want to add:"));
            machineSupplies.water = machineSupplies.water + fillWater;
            fillMilk = Number(input("Write how many ml of milk you want to add:"));
            machineSupplies.milk = machineSupplies.milk + fillMilk;
            fillBeans = Number(input("Write how many grams of coffee beans you want to add:"));
            machineSupplies.beans = machineSupplies.beans + fillBeans;
            fillCups = Number(input("Write how many disposable coffee cups you want to add:"));
            machineSupplies.cups = machineSupplies.cups + fillCups;}
            break;

        case "take":
            {console.log(`I gave you $${machineSupplies.cash}`);
            machineSupplies.cash = 0;}
            break;

        case "remaining":
        {return  console.log(`The coffee machine has:
${machineSupplies.water} ml of water
${machineSupplies.milk} ml of milk
${machineSupplies.beans} g of coffee beans
${machineSupplies.cups} disposable cups
$${machineSupplies.cash} of money`);}
        break;

        case "exit":
            break;
}}

while(true) {
    let action = input("Write action (buy, fill, take, remaining, exit):");
    chooseFunc(action);
    if(action === "exit") {
        break;
    }
}
