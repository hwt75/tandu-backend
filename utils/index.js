const express = require('express');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY || 'failed';



const decode = (req, res,next) => {
    const secretCode = req.body.code ?? 0;

    if(secretCode === 0){
        res.status(404).send(JSON.stringify({status: false}))
    }
    else {
        if(checkSecretCode(secretCode,secretKey)){
            next();
        }
        else{
            res.status(404).send(JSON.stringify({status: false}))
        }
    }
}
const checkSecretCode = (secretCode,key) => {
    if(key === "failed") return false;
    const regex = new RegExp(`-${key}-`);
    return regex.test(secretCode);
}

module.exports = decode
