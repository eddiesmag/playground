/** Basic Promises */

var functions = function() {
    return new Promise(function(resolve, reject) {
        resolve("Learnt JS functions,");
    });
}

var callBacks = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + " learnt Callback functions &");
    })
}

var promises = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + " Good to go for JavaScript Promises!");
    })
}

functions().then(function(result) {
    return callBacks(result);
}).then(function(result) {
    return promises(result);
}).then(function(result){
    // console.log("Good to go : " + result);
}).catch(function(err) {
    return err;
})
 let id = 0;
const msg = () => alert("i ran after 3sec!!!!");

function Start() {
    id = setInterval(msg, 5000);
}

function Stop() {
    clearTimeout(id);
}

/*var promise = new Promise(function(resolve, reject) {
    var myBoy = false;

    if(!myBoy) {
        resolve("Stuff worked....");
    } else {
        reject(Error("Stuff Broke!!!!"));
    }
})

// promise.then(function(result) {
//     console.log(result);
// }, function(err) {
//     console.log(err);
// })

promise.then(function(result) {
    console.log(result);
}).catch(function(err) {
    console.log(err)
})*/

/** Promises Example */