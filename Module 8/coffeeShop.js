function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if (drink === 'coffee'){
            resolve("Order for coffee received")
        }
        else{
            reject("Sorry, Your order is Rejected")
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log("Order is being Processed")
        resolve(`${order} and It is Served`)
    })
}

// placeOrder('tea').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed
// }).then(function(processedOrder){
//     console.log(processedOrder)
// }).catch(function(err){
//     console.log(err)
// }) // Chaining of Promise - Solution with Promises

// Async Await - Keywords  

async function serveOrder(){
    try{
        let orderPlaced = await placeOrder('coff')
        console.log(orderPlaced)
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)
    }catch(err){
        console.log(err)
    }
    
}

serveOrder()