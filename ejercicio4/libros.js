var express=require("express");
var router=express.Router();
router.get('/', function(req,res){
    res.send('Libros homepage ');
}); 
router.post("/add", function(req,res){
    res.send('Libro añadido');
}); 
router.get("/add/:id", function(req,res){
    res.send('Añadir libro '+ req.params.id);
});
router.post("/edit/:id", function(req,res){
    res.send('Editar libro '+req.params.id);
});
router.get("/delete/:id", function(req,res){
    res.send('Borrar libro '+req.params.id);
});
router.get("/delete/confirm/:id", function(req,res){
    res.send('Confirmar borrado del libro '+req.params.id);
});

module.exports=router;