function makeCoffee(Coffee) {
    return new Promise(function(resolve, reject) {
        console.log("Making Request for " + Coffee);
        if(Coffee === "Black coffee") {
            resolve("Here is your Coffee, have a nice Day.")
        } else {
            reject("Sorry we make black coffee only!");
        }
    });
}

function processOrder(order) {
    return new Promise(function(resolve, reject) {
        console.log("Processing Order....." + order);
        resolve("Extra Information ");
    });
}

/** with promises */
makeCoffee("Black coffee").then(order =>{
    console.log("Order has been received");
    return processOrder(order);
}).then(processedOrder => {
    console.log(processedOrder);
}).catch(err =>{
    console.log(console.log(err));
})

/** with async await */
async function asyncFunc() {
    try {
    var order = await makeCoffee("Black cof  fee");
    console.log("Order has been received");

    var processedOrder = await processOrder(order);
    console.log(processedOrder);
} catch(err) {
    console.log(err); 
}
}
asyncFunc();
