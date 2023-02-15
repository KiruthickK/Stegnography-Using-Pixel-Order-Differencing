const User = require("../models/User");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'That email is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }

    // duplicate email error
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        // console.log(err);
        Object.values(err.errors).forEach(({ properties }) => {
            // console.log(val);
            // console.log(properties);
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

// create json web token
const maxAge = 15 * 60 * 1000; //15 mins 
const createToken = (id) => {
    return jwt.sign({ id }, 'Isaa Steganography Risky wisky Secret', {
        expiresIn: maxAge
    });
};

// controller actions
module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.signup_post = async(req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({ name, email, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
        res.status(201).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }

}

module.exports.login_post = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }

}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}

module.exports.generateOtp = (req, res) => {
    const { email } = req.body;
    try {
        var otp = sendmail(email);
        res.status(200).json({ otp });
    } catch (e) {
        console.log(e);
    }
}


function sendmail(email) {
    const otp = Math.floor(Math.random() * 9999999) + 1000000;
    var transporter = nodemailer.createTransport({
        service: 'hotmail',

        auth: {
            user: 'stegno_isaa_authentication@outlook.com',
            pass: 'ISAAStegno'
        }
    });
    var mailoptions = {
        from: 'stegno_isaa_authentication@outlook.com',
        to: email,
        subject: 'OTP for Login',
        text: "Your OTP for logging into Image Steganography website is " + otp
    };
    transporter.sendMail(mailoptions, function(error, info) {
        if (error) {
            console.log("im here" + error);
        } else {
            console.log('Email sent ' + info.response);
        }
    });
    return otp;
}