const db = require('../database/models');
const path = require('path');


//const universalModel = require('../model/universalModel'); 
//const productModel = universalModel('products');

const apiProduct = { 

    mostrarProductos: async (req,res) =>{
        try {
            const allProducts = await db.Products.findAll({
                include: [db.Images]
            }) 
            const table = allProducts.filter( product => product.id_category == "2" );
            const coffeeTable = allProducts.filter( product => product.id_category == "4" );
            const desk = allProducts.filter( product => product.id_category == "1" );
            const mirror = allProducts.filter( product => product.id_category == "3" );
            let meta = {
                status: 200,
                url: "/http://localhost:3030/api/products",
                count: allProducts.length,
                countByCategory: {
                    Mesas : table.length,
                    MesasRatonas : coffeeTable.length,
                    Espejos : mirror.length,
                    Escritorios : desk.length
                }
            }
                
            let products = []

            allProducts.forEach( product =>{
                products.push({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    category: product.id_category,
                    color: product.id_color,
                    detail: `${req.headers.host}/api/products/${product.id}`
                })
            })

            let respuesta = {meta, data: products}
            return res.json(respuesta)

        } catch (error) {
            res.json({error: error.message});
        }
    },

    mostrarUltimoProducto: async (req,res) =>{
      
        try {            
            const id = +req.params.id;
            const product = await db.Products.findByPk(id,{
                include:[db.Images, db.Colors, db.Categories],
                    order: [
                        ["id", "DESC"],
                 ],
                        limit: 1
                });

            let meta = {
                status: 200,
                url: "http://localhost:3030/api/products/lastproduct" 
            }
            let data = {
                id: product.id,
                name: product.name,
                price: product.price,
                description: product.description,
                measures: product.measures,
                discount: product.discount,
                category: product.id_category,
                color: product.id_color,
                image: "http://localhost:3030/images/${product.Images[0].path}" 
            }

            let respuesta = {meta, data}
            return res.json(respuesta)
        } catch (error) {
            res.json({error: error.message});
        }
    },

}





module.exports = apiProduct