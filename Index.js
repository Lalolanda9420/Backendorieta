import ProductManager from './Segundaentrega.js';
const manager = new ProductManager();
const operacionesProductos = async () => {
    try {
        let product1 = await manager.addProduct("JR10", "Camiseta alternativa Boca", "Blanca y azul", 18000, "camiseta.jpg", 32)
        console.log(product1)
        let product2 = await manager.addProduct("JR10", "Short Boca alternativo", "Blanco", 8000, "short.jpg", 12)
        console.log(product2)

         let segundaConsulta = await manager.getProducts();
         console.log(segundaConsulta);
         let productoId= await manager.getProductById(2)
         console.log(productoId);
        let productAct = await manager.updateProduct(2, "Camiseta");
        console.log(productAct);
        let deleteproduct1 = await manager.deleteProducts(3);
        console.log(deleteproduct1)
    } catch (error) {
        console.log(error);
    }


}
operacionesProductos();