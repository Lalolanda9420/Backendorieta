import express from 'express';
import ProductManager from './helpers/productManager.js';

const app = express();
const PORT = 8080;

const productManager = new ProductManager();

app.get('/products', async (req, res)=>{
    const { limit } = req.query;
    console.log(limit);
    const products = await productManager.getProducts();

    if(limit){
        const productsLimited = products.filter( (el,index) => index<limit);
        return res.json({
            ok:true,
            products:productsLimited,
            limit
        })
    }

    return res.json({
        ok:true,
        products,
        limit
    })

});




app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT} `);
});

