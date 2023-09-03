// How to produce a promise 

let myPromise = new Promise(function(resolve, reject){
    const a = 4 
    const b = 3

    setTimeout(() => {
        if (a===b){
            resolve("The values are equal")
        }
        else{
            reject("The values were not equal")
        }
    }, 2000)
})


//Pending State
// console.log(myPromise)

//Fulfilled - then method
// consuming your promises
myPromise.then(function(result){
    console.log(result)
}) // fulfilled state

//Reject - catch method 

myPromise.catch(function(error){
    console.log(error)
}) // Rejected State 

// Your Promise will get resolved