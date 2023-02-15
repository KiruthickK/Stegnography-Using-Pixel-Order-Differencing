//loading uploaded image and displaying them in the web page
var loadcover = function(event) {
    var output = document.getElementById('coverimg');
    output.src = URL.createObjectURL(event.target.files[0]);
    coverimageurl = output.src;
    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
    FlagForEncryptImagesUploaded();
}
var loadsecret = function(event) {
    var output = document.getElementById('secretimg');
    output.src = URL.createObjectURL(event.target.files[0]);
    coverimageurl = output.src;
    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
    FlagForEncryptImagesUploaded();
}
var loadEncrypt = function(event) {
    var output = document.getElementById('decryptimg');
    output.src = URL.createObjectURL(event.target.files[0]);
    coverimageurl = output.src;
    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
    FlagForDecryptImagesUploaded();
}
var x = 0;
var y = 0;

// function FlagResetForEncrypt() {
//     x = 0;
//     console.log('Flag resetted!, now can try another set of images!');
// }

// function FlagResetForDecrypt() {
//     y = 0;
//     console.log('Flag resetted!, now can try another set of images!');
// }

//for alerting the user to upload images first before hiding image
function FlagForEncryptImagesUploaded() {
    x++;
    console.log("Flag set");
    if (x >= 3) {
        return true;
    } else
        return false;
    //return true;
}

function FlagForDecryptImagesUploaded() {
    y++;
    console.log("Flag set");
    if (y >= 2) {
        return true;
    } else
        return false;
    //return true;
}