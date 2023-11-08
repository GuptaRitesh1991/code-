// Singleton

//const tinder ={} // Non sigleton
const tinder = new Object() // Signleton object
//console.log(tinder); // no diff gives simple empty object
tinder.id = "123abc"
tinder.name = "Abc"
tinder.isLoggedIn = false

//console.log(tinder)

const regularUser = 
{ 
      email: "cdb@gmail.com",
      fullName :
        {
            userFullName:
                {
                    firstName: "Ritesh",
                    middleName: "Indrapal",
                    lastName:"Gupta"
                }
        }
}
console.log(regularUser.fullName.userFullName);

