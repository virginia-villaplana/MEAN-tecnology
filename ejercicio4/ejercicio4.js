#!/usr/bin/env node

var http=require("http");
var express=require("express");
var cookieParser = require('cookie-parser');
var app=express(); //1. Creas la aplicación

    
app.use (cookieParser());

app.get("/creaCookie", function(req,res){
   res.cookie("idioma","es_ES", {domain:"localhost"});
    console.log(res.cookie);
    res.send("idioma enviado!");
});

app.get("/muestraCookies", function(req,res){
    console.log(req.cookies);
    res.send("<ul><li>"+req.cookies.idioma+"</li></ul>")
});


var libros=require('./libros');//./libros es el fichero y /libros es la ruta.
app.use('/libros', libros);

app.listen(3001, function (){
    console.log('app escuchando en el puerto 3001');
});

/*
1.- Crea un nuevo proyecto express en un directorio llamado ejercicio4
2.- Crea una nueva ruta llamada /creaCookie que sea capaz de mandar una cookie al cliente con el nombre "idioma" y el valor "es_ES" para el dominio localhost y que no tenga fecha de expiración
3.- Crea una nueva ruta llamada /muestraCookies que devuelva un listado en html (ul-li) y en cada li mostrar el nombre de la cookie y el valor almacenado
4.- Crea un nuevo router express con el nombre libros que maneje la ruta /libros  
5.- Dentro del router definir las siguientes rutas:
* get /
* post /add
* get /:id
* get /edit/:id
* post /edit/:id
* get /delete/:id
* get /delete/confirm/:id
En todos estos casos las funciones deverán devolver al cliente (res) el método empleado y la ruta definida
*/