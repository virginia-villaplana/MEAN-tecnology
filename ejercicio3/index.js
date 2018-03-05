#!/usr/bin/env node

var express=require("express");
var bodyParser = require('body-parser');

var app=express(); //1. Creas la aplicación
console.log("App.js arrancado!");

app.use(bodyParser.urlencoded({ extended: false}));


//2.Configuras las rutas

app.get("/libros", function(req,res){
    res.send("GET recibida");
}); /*Esto hace cambio en el servidor, por ello habría que reiniciar el servidor para aplicar los cambios. Cuando te hagan una petición de barra ("/", te devuelve el console.log*/

app.post("/libros", function(req,res){
    res.send("POST enviada");
});


app.get("/provincias", function(req,res){
    res.send("<ul><li>Ávila</li><li>Burgos</li><li>León</li><li>Palencia</li><li>Salamanca</li><li>Soria</li><li>Segovia</li><li>Valladolid</li><li>Zamora</li></ul>");
});

//5.- Crea una nueva ruta en la aplicación que sea capaz de recoger los datos de un formulario enviados vía post a la url /provincias. Esto deverá devolver un objeto con los datos enviados por el formulario.

app.route("/provincias/send")
    .get(function(req,res){
       res.send("<form method='post' action='/provincias/send'><select name='formulario' form='provincias'><option value='avila'>Ávila</option><option value='burgos'>Burgos</option><option value='leon'>León</option><option value='palencia'>Palencia</option><option value='salamanca'>Salamanca</option><option value='soria'>Soria</option><option value='segovia'>Segovia</option><option value='valladolid'>Valladolid</option><option value='zamora'>Zamora</option></select><button type='submit'>Enviar</button></form>");
     })
    .post(function(req,res){
        res.send("La provincia buscada es"+req.body);
    });

 /*6.- Crea una nueva ruta variable que sea del tipo 
/get/miidentificativo donde mi midentificativo sea variable. Haz que devuelva el valor que se le ha dado cada vez a ese identificativo   */
app.get("/get/:id", function(req,res){
    res.send(req.params.id);
});

/*7.- Crea un nueva ruta para la edición y borrado de items ambas tendrán una ruta parecida al ejercicio 6
/edit/miiden /delete/miiden. En ambos casos se devolverá el identificativo. En el caso de la edición se enviará una petición POST, en el caso del borrado será GET.*/
app.post("/edit/:id", function(req,res){
    console.log(req.body); //Aquí -en request.body- están los datos del formulario.
    res.send(req.params.id);
});
app.get("/delete/:id"), function(req,res){
    res.send(req.params.id);
});

//lanzamiento del servidor (una vez configuradas las rutas)
app.listen(3001, function (){
    console.log('app escuchando en el puerto 3001');
});


//8.- Pasa una seríe de parámetros por URL en el formato ?+&. Los datos a pasar son username y password. Devuelve true o false dependiendo de si ambos son "admin" la URL será /login y se hará via POST.
app.post("/login", function(req,res){
    var user=req.query.username;
    var pass=req.query.password;
    if(user=="admin" && pass=="admin"){
        res.send(true)
    // "http://localhost:3001/login?username=admin&password=admin" o también del formato "/login/:username/:password" --> pretty format
    }else{
      res.send(false);
    }
});

//Modo correcto de hacerlo:
app.post("/loginCorrecto",function(req,res){
    var user=req.body;
    if(user.username=="admin" && user.password=="admin"){
        res.send(true);
    }else{
        res.send(false);
    }
})

/*
1.- todos los ejercicios deberán ser resueltos en una carpeta llamada ejercicio3
2.- Crea una aplicación express, arráncala y comprueba que sepuede acceder correctamente a ella
3.- Gestiona las peticiones que entre por la URL (/libros) para los métodos Get y Post. Devuelve un texto que indique que método es el que se ha empleado para hacer la petición
4.- Crea una nueva ruta en la aplicación que devuelva un listado html con las provincias de castilla y león accesible desde la url /provincias y el método get
*/