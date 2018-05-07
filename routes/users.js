"use strict"

var express = require('express');
var router = express.Router();
const pg = require('pg');

var conString = "postgres://bsmnijcuiwvkjv:74cc40e5aeacbab1b05062b5bbe05be74e4b169fd16e4f1fbec5c322e35870a2@ec2-23-23-248-192.compute-1.amazonaws.com:5432/ddgv69397q5l6b";

const client = new pg.Client(conString);

/*
const query = client.query('SELECT * FROM rutina');

query.on('end', () => { client.end(); });


*/

/* GET users */
router.get('/user', function(req, res, next) {
	
	client.connect();

	var resultado = client.query('Select * from usuario');
	res.status(403).json(resultado);

	client.end();

})
/*create user*/
router
	.post('/user', function(req, res, next) {
		if(!req.body)
		{
  			res
  			.status(403)
  			.json({ error: true , message: 'body empty'})
  		}
   	
   		/*let PUser=req.body;
   		var  user={
   			nombre: PUser.nombre,
   			apellido: PUser.apellido
   			fechapago: PUser.fechapago
   			token: PUser.token
   			password: PUser.password
   			rol: PUser.rol
   			edad: PUser.edad
   			idGimnasio: PUser.idGimnasio
   			activo: PUser.activo
   		} 
   		try
   		{
   			var query = client.query('INSERT INTO public.usuario('+'nombre, apellido,'
   			+ 'fechapago, token, password, rol, edad, idgimnasio, activo)' + 
   			'VALUES ('+user+');');
   			
   		} 		
   		catch{res.status(403).json({error:true})}

   		res.status(201).json({movie : movie})
   		 

		//res es lo que devuelve
		res
			.status(200)*/
			
})
/*get an user*/
router
	.get('/:id', function(req, res, next) {
		/*
			codigo
		*/

		//res es lo que devuelve
		res
			.status(200)
			
})
router
	.get('/:nombre', function(req, res, next) {
		/*
			codigo
		*/

		//res es lo que devuelve
		res
			.status(200)
			
})
router
	.put('/:id', function(req, res, next) {
		/*
			codigo
		*/

		//res es lo que devuelve
		res
			.status(200)
			
})
router
	.delete('/:id', function(req, res, next) {
		/*
			codigo
		*/

		//res es lo que devuelve
		res
			.status(400)
			
})


module.exports = router;
