const express = require('express');
const router = express.Router();
const countriesController   = require('../../controllers/countries.controller')
require('dotenv').config();

const secretKey = process.env.SECRET_KEY || 'failed';

const decode = (req, res,next) => {
    const secretCode = req.body.code ?? 0;

    if(secretCode === 0){
        res.status(404).send(JSON.stringify({status: false}))
    }
    else {
        if(secretCode === secretKey){
            next();
        }
        else{
            res.status(404).send(JSON.stringify({status: false}))
        }
    }
}
router.post('/get-countries',decode, countriesController.getAll);

module.exports = router;
