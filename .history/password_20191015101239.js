

function generate(length) {
var chars = "abcdefghijklmnopqrstuvwxyzABCEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var Sym = "!@#$%^&*()_+=";

    var result = " ";
    // btn.innerHTML          = '';
    // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < characters.length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 console.log(generate(8));
 btn.addEventListener("click", generate())
 
 
