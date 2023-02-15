//Main Steganography Javascript File
var cover_img = null;
var secret_img = null;
var output_img = null;
var dec_img = null;
var crp = 0,
    srp = 0;
var cgp = 0,
    sgp = 0;
var cbp = 0,
    sbg = 0;

function encrypt() {
    console.time('Execution Time');
    var secretkey = document.getElementById("secretkey").value;
    secretkey = parseInt(secretkey);
    if ((secretkey > 0) && (secretkey < 1000)) {
        // if (secretkey > 0) {
        var file_cover = document.getElementById("coverimg");
        var file_secret = document.getElementById("secretimg");

        if (FlagForEncryptImagesUploaded()) {
            cover_img = new SimpleImage(file_cover);
            secret_img = new SimpleImage(file_secret);
            var x1 = cover_img.getHeight();
            var y1 = cover_img.getWidth();
            var x2 = secret_img.getHeight();
            var y2 = secret_img.getWidth();
            var i = 0;
            console.log("x1:" + x1 + "y1:" + y1 + "x2:" + x2 + "y2:" + y2);
            output_img = new SimpleImage(y1, x1);
            if ((x1 == x2) && (y1 == y2)) {
                OrderChangeEncryptMethOne(secretkey);
                var canvas = document.getElementById("can1");
                output_img.drawTo(canvas);
            } else {
                alert("Cover Image and Secret Image's Dimension should be same!");
            }
        } else {
            alert('Upload Images First!');
            //FlagResetForEncrypt(); //because on the button press itself calls the flag and on the third time it ignores!
        }
    } else {
        alert("Secret key should greater than 0 and less tha 100000000");
    }
    console.timeEnd('Execution Time');
}

function decrypt() {
    console.time('Execution Time');
    if (FlagForDecryptImagesUploaded()) {
        var secretkey = document.getElementById("secretkey").value;
        secretkey = parseInt(secretkey);
        if ((secretkey > 0) && (secretkey < 1001)) {
            var decrypt_Image = document.getElementById("decryptimg");
            output_img = new SimpleImage(decrypt_Image);
            dec_img = new SimpleImage(output_img.getWidth(), output_img.getHeight());
            OrderChangeDecryptMethOne(secretkey);
            var canvas2 = document.getElementById("can2");
            dec_img.drawTo(canvas2);
        } else {
            alert("Secret key should greater than 0 and less tha 100000000");
        }
    } else {
        alert('Upload Image first!');
        //FlagResetForDecrypt(); //because on the button press itself calls the flag and on the third time it ignores!
    }
    console.timeEnd('Execution Time');
}