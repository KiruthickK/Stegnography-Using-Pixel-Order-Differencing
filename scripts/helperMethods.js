function cover_image_right_bit_clearance(pix) {
    return Math.floor(pix / 16) * 16;
}

function secret_image_left_bit_clearance(pix) {
    const res = Math.floor(pix / 16);
    return res;
}

function cover_image_right_bit_recovery(pix) {
    const res = (pix % 16);
    return res;
}

function DownloadEncrypted() {
    let canv = document.getElementById("can1");
    let anc = document.createElement("a");
    anc.download = "EncryptedImage.jpg";
    anc.href = canv.toDataURL("EncryptedImage.jpg");
    anc.click();
    anc.remove();

}

function DownloadDecrypted() {
    let canv = document.getElementById("can2");
    let anc = document.createElement("a");
    anc.download = "DecryptedImage.jpg";
    anc.href = canv.toDataURL("DecryptedImage.jpg");
    anc.click();
    anc.remove();
}