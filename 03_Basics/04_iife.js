// immediately invoked function expression (IIFE) ----- (Function)()
// This is used to immediately invoked function, and save code from global pollution

(function chai() {  // This is called Named IIFE

    console.log(`DB Connected`);

    
}) ();  // ; is important to close IIFE block code to run another code, 


(() => {console.log(`DB Connected Two`)
}) ()  // this is using IIFE through arrow function