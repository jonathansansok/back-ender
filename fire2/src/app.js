
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routerProductos = require('./routes/product.routes')
const routerCarrito = require('./routes/carrito.routes')

const app = express();

let PORT = process.env.PORT || 8080;

app.use(cors());

//app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//// Conexión MongoDB
const uri = `mongodb+srv://jsanso:<React100>@jsanso.kmkwg9v.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri)

//TAMBIEN lo use cmd conmongo shell:
//const uri = `mongosh "mongodb+srv://jsanso.kmkwg9v.mongodb.net/myFirstDatabase" --apiVersion 1 --username jsanso`;
//usuario jsanso
//clave React100
//db ecommerce
//colecciones productos y carts

mongoose.connect(uri)
  .then( () => console.log('BD Conectada'))
  .catch( err => console.log(err))

app.use('/api/productos', routerProductos);
app.use('/api/carrito', routerCarrito);

app.use((req,res) => {
  res.send({status: 'ERROR', result: `Ruta ${req.url} no implementada`})
});

app.listen(PORT, () => console.log(`Server Up on Port ${PORT} !!`));