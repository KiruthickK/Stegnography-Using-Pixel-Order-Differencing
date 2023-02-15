function OrderChangeDecryptMethOne(secretkey) {
    var rem = Math.floor(secretkey % 16);
    const mc = 2; //mc = multipliying constant
    var i = 0;
    tmpR = [];
    tmpG = [];
    tmpB = [];
    s_redArr = [];
    s_blueArr = [];
    s_greenArr = [];
    for (var ixel of output_img.values()) {
        tmpR[i] = ixel.getRed();
        tmpG[i] = ixel.getGreen();
        tmpB[i] = ixel.getBlue();
        i++;
    }

    //new
    ts_redArr = [];
    ts_blueArr = [];
    ts_greenArr = [];
    var index = 0;
    for (i = 0; i < tmpB.length; i++) {
        if (i != 0) {
            i--;
        }
        for (var j = 0; j < (rem * (secretkey * mc)); j++, i++) {
            if (i < tmpB.length) {
                ts_redArr[j] = tmpR[i];
                ts_blueArr[j] = tmpB[i];
                ts_greenArr[j] = tmpG[i];
            }
        }
        ts_blueArr = ts_blueArr.reverse();
        ts_greenArr = ts_greenArr.reverse();
        ts_redArr = ts_redArr.reverse();
        for (var j = 0; j < ts_redArr.length; j++) {
            s_redArr[index] = ts_redArr[j];
            s_blueArr[index] = ts_blueArr[j];
            s_greenArr[index++] = ts_greenArr[j];
        }
    }
    i = 0;
    for (var pixel of output_img.values()) {
        srp = 16 * (cover_image_right_bit_recovery(decryptLeastBitOne(s_redArr[i], rem)));
        sgp = 16 * (cover_image_right_bit_recovery(decryptLeastBitOne(s_greenArr[i], rem)));
        sbp = 16 * (cover_image_right_bit_recovery(decryptLeastBitOne(s_blueArr[i], rem)));
        x1 = pixel.getX();
        y1 = pixel.getY();
        var o_pix = output_img.getPixel(x1, y1);
        o_pix.setRed(srp);
        o_pix.setGreen(sgp);
        o_pix.setBlue(sbp);
        dec_img.setPixel(x1, y1, o_pix);
        i++;
    }
}