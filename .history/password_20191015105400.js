

function generate(length) {

    var result = " ";
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    // set a for loop of all the characters and randomize them.
    for ( var i = 0; i < characters.length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;


//  trying to attach
 btn.addEventListener("click", checkPassword())

 document.getElementById("display").addEventListener("click", checkPassword);

 function checkPassword() {
    document.getElementById("display").innerHTML = results;
  }
 
 }


 console.log(generate(8));
