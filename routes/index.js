"use strict"
var express = require('express');
var router = express.Router();

/* GET a la pagina index hace esto */
router
	.get('/', function(req, res, next) {
		//res es lo que devuelve
		res
			.status(200)
			.json({message: 'hola mundo!'})
});



module.exports = router;
