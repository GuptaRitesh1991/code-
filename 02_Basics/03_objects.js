"Key1"// two ways to declare obects, 1 by literals and another by constructor 
//Singleton = object created from constructor - no multiple insantance  (object.create)method is used.



// Object literals

const mySym = Symbol("Key1")


const jsUser = {

    name: "Ritesh",
    age: 27,
    [mySym] : "myKey1",// right way to access Symbol
    "fullName" : "Ritesh Gupta",
    place: "mumbai",
    email:"abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
                }
//Object.freeze(jsUser)// actually lock object from changing its attributes value

                //console.log((jsUser.email)); // common way to access object attributes, below is another way you can access it too
                //console.log(jsUser['email']);// behind the scene all variables name are tracked by string type
                //console.log(jsUser["fullName"]) // when variable wriiten in its actual type, they have to be access like this
                //console.log(jsUser[typeof(mySym)])


                // == how to change object values example below 

                jsUser.email = "kbc@gamil.com"

                //Object.freeze(jsUser) // Freeze objects and does not allow users to make changes in it.
                jsUser.email = "bbc@gamil.com"

                //console.log(jsUser);

                // functions

                jsUser.greetings = function() 
                {
                    console.log("Hello World");
                }

                jsUser.greetings2 = function() 
                {
                    console.log(`Hello World,${this.name}`);
                }
                console.log(jsUser.greetings());
                console.log(jsUser.greetings2());