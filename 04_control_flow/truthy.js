const userEmail = ""//"r@gamil.com" // []

if (userEmail) {

    console.log("Got user email");

}
else{

    console.log("Don't have user email");
    
}

//falsy values 
// false, 0, -0, BigInt 0n, null, undefined, NAN, ""

//Truthy values
// "0","false"," ", [], {}, function () {   }


// Nullish Coalescing Operator(??): null & undefined

let val1;
val1 = 5 ?? 10 // will print 5
val1 = null ?? 10  // will print 10
val1 = undefined ?? 15  // will print 15

val1 = null ?? 10 ?? 20 // will print 10

// Terinary operator
//syntax condition ? true : false

const iceTeaprice = 100
iceTeaprice >= 80 ? console.log("Price is less than 80"): console.log("Price is greater than 80");
