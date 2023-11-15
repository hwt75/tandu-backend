const express = require('express');
const router = express.Router();
const countriesController   = require('../../controllers/countries.controller')
const partnersController = require('../../controllers/partners.controller')
const servicesController = require('../../controllers/services.controller')
const scholarshipsController = require('../../controllers/scholarships.controller')
const emailController = require('../../controllers/email.controller')
const decode = require('../../utils')



router.post('/get-countries',decode, countriesController.getAll);
router.post('/get-partners',decode, partnersController.getAll);
router.post('/get-scholarships',decode, scholarshipsController.getAll);
router.post('/get-services',decode, servicesController.getAll);
router.post('/send-email',decode, emailController.sendEmail)
module.exports = router;
