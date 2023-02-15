function OrderChangeEncryptMethOne(secretkey) {
    var rem = Math.floor(secretkey % 16);
    const mc = 2; //mc = multipliying consant
    var i = 0;
    tmpR = [];
    tmpG = [];
    tmpB = [];
    s_redArr = [];
    s_blueArr = [];
    s_greenArr = [];
    for (var ixel of secret_img.values()) {
        tmpR[i] = ixel.getRed();
        tmpG[i] = ixel.getGreen();
        tmpB[i] = ixel.getBlue();
        i++;
    }


    ts_redArr = [];
    ts_blueArr = [];
    ts_greenArr = [];
    var index = 0;
    for (var i = 0; i < tmpB.length; i++) {
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
        for (var j = 0; j < ts_blueArr.length; j++) {
            s_redArr[index] = ts_redArr[j];
            s_blueArr[index] = ts_blueArr[j];
            s_greenArr[index++] = ts_greenArr[j];
        }
    }
    var k = 0;
    for (var pixel of secret_img.values()) {
        srp = s_redArr[k];
        sgp = s_greenArr[k];
        sbp = s_blueArr[k];
        x1 = pixel.getX();
        y1 = pixel.getY();
        var c_pix = cover_img.getPixel(x1, y1);
        var o_pix = output_img.getPixel(x1, y1);
        crp = c_pix.getRed();
        cgp = c_pix.getGreen();
        cbp = c_pix.getBlue();
        srp = secret_image_left_bit_clearance(srp);
        sgp = secret_image_left_bit_clearance(sgp);
        sbp = secret_image_left_bit_clearance(sbp);
        crp = cover_image_right_bit_clearance(crp);
        cgp = cover_image_right_bit_clearance(cgp);
        cbp = cover_image_right_bit_clearance(cbp);
        var orp = crp + encryptLeastBitOne(srp, rem);
        var ogp = cgp + encryptLeastBitOne(sgp, rem);
        var obp = cbp + encryptLeastBitOne(sbp, rem);
        o_pix.setRed(orp);
        o_pix.setGreen(ogp);
        o_pix.setBlue(obp);
        output_img.setPixel(x1, y1, o_pix);
        k++;
    }

}