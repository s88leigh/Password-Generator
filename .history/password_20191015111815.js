

function generate(length){
   
    var result = " ";
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    // set a for loop of all the characters and randomize them.
    for ( var i = 0; i < characters.length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
 
  console.log(generate(8));
//  trying to attach button to display screen.
 button.addEventListener("click", checkPassword())

 document.getElementById("display").addEventListener("click", checkPassword);

 function checkPassword() {
    document.getElementById("display").innerHTML = " ";
  }
 




