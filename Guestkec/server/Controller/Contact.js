const nodemailer = require('nodemailer');
const express = require('express')

const Contactus = async function(req, res) {

    

    
        console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nidharsanv.22cse@kongu.edu',
            pass: 'nidharsan8008'
        }
    });

    const { email, name, message } = req.body;

    const mailOptions = {
        from: 'nidharsanv.22cse@kongu.edu',
        to: email,
        subject: "Mr. " + name,
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if(error)
            {
                console.error(error)
            }

        else{
            console.log(info.response)
        }
    });
}


module.exports = { Contactus };