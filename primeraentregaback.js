import { products } from './product/products';

class ProductManager {
    constructor(){
        this.products = [];
    }

    addProduct = (prodTitle, prodDescription, prodPrice, prodThumbnail, prodCode, prodStock) =>{
    const productIndex = this.products.findIndex((product) => product.prodCode === prodCode)
    
    if(!prodTitle || !prodDescription || !prodPrice || !prodThumbnail || !prodCode || !prodStock){
        console.log("Error: complete everything don't be lazy")
        return;
    }

    if (productIndex === -1){
        const product = {
            prodId: this.products.length + 1,
            prodTitle,
            prodDescription,
            prodPrice,
            prodThumbnail,
            prodCode,
            prodStock,
        };
this.produtcs.push(product);
console.log('Product with code ${prodCode} well added silly')
    } else {
        console.log('Error: Product with code ${prodCode} already exists idiot');
    };

    getProducts = () => {
        console.log(this.products);
        return this.products;
    };

    getProductById = (prodId) => {
        const productIdFound = this.products.findIndex((prod) => prod.prodId === productId);
        if (productIdFound === -1){
            console.log('Error: Product ID ${productId} was not found moron');
        } else {
            console.log('Info on product with Product ID ${productId}:');
            console.log(this.products[productIdFound])
        }
    };
}
}

//PROBANDO CODEO////

let products = new ProductManager();
products.getProducts(); // Empty array

products.addProduct ("test"); // Missing Fields
products.addProduct("test product", "this is a test product", 200, "No image", "abc123"); // Missing fields
products.addProduct("this is a test product", 200, "No image", "abc123", 25); // Missing fields
products.addProduct(200, "No image", "abc123", 25); // Missing fields
products.addProduct("test product", "this is a test product", 200, "No image", "abc123", 25); // Product 1
products.addProduct("test product", "this is a test product", 200, "No image", "abc123", 25); // Repeated
products.addProduct("test product2", "this is a test product2", 500, "No image", "bbc123", 50); // Product 2
products.addProduct("test product3", "this is a test product3", 700, "No image", "cbal23", 80); // Product 3

products.getProducts();

products.addProduct("test product", "this is a test product", 200, "No image", "bbc123", 25); // Repeated

products.getProducts();

products.getProductById(8); // Non existant
products.getProductById(1);
products.getProductById(3);
products.getProductBy1d(17); // Non existant
