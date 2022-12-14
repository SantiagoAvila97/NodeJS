const conexion = require('./db');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express();
router.use(express.json());			

//Prueba de ruta protegida JWT

router.post("/login",(req, res) => {

	// res.json({
		
	// });
	const user = {
		correo: "santiago@prueba.com",
		id: "1233890724",
	};
	
	jwt.sign({ user:user}, "claveSantiago", (err, token) => {

		res.json({
			prueba: "Entro a login",
			token,
		});
	})

});

//Authorization: Bearer <token>, agrega seguridad a la ruta
function verificarToken(req, res, next) {
	const bearerHeader =  req.headers['authorization'];
	
	if(typeof bearerHeader !== 'undefined'){
		
     	req.token  = bearerHeader
     	next();
		res.json({
			bearerToken,
			mensaje: "hola"
		})

	}else{
    	// res.sendStatus(403);
		res.json({
			bearerHeader
		})
		
	}
}

router.post("/home", verificarToken, (req, res) => {
	
	jwt.verify(req.token, "claveSantiago", (error, authData) => {
    	if(error){
        	console.log(error)
    	}else{
        	res.json({
                	mensaje: "Post fue creado",
                	authData
            	});
    	}
	});
});


//METODOS 

router.get("/", (req, res) => {
	res.send('Obtener todos los usuarios')
});

router.get("/api/cliente", (req, res) => {
	conexion.query('SELECT * FROM cliente', [req.params.id], (error, filas) => {
		if (error) {
			throw error;
		} else {
			res.send(filas);
		}
	})
});

router.post("/api/cliente", (req, res) => {
	let data = { id: req.body.id, nombre: req.body.nombre, correo: req.body.correo, celular: req.body.celular };
	let sql = "INSERT INTO cliente SET ?";
	conexion.query(sql, data, function (error, results) {
		if (error) {
			throw error;
		} else {
			res.send(results);
		}
	})
});

router.put("/api/cliente/:id", (req, res) => {
	let id = req.params.id;
	let nombre = req.body.nombre;
	let correo = req.body.correo;
	let celular = req.body.celular;
	let sql = "UPDATE cliente SET nombre = ?, correo = ?, celular = ? WHERE id = ?";
	conexion.query(sql, [id, nombre, correo, celular], function (error, results) {
		if (error) {
			throw error;
		} else {
			res.send(results);
		}
	})
});

router.delete("/api/cliente/:id", (req, res) => {
	let id = req.params.id;
	let sql = "DELETE FROM cliente WHERE id = ?";
	conexion.query(sql, [id], function (error, results) {
		if (error) {
			throw error;
		} else {
			res.send(results);
		}
	})
});



module.exports = router;







