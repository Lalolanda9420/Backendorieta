import fs from "fs";
export default class ProductManager {
    constructor() {
        this.products = [];
        this.path = "./files/Productos.json";
    }
    getProducts = async () => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            this.products = JSON.parse(data);
            return this.products;
        } catch (error) {
            console.error(`error read archive ${this.path}: ${error}`);
            return [];
        }
    }
    addProduct = async (code, title, description, price, thumbnail, stock) => {
        try {
            if (!code || !title || !description || !price || !thumbnail || !stock) {
                console.log("All the fields must be completed")
                return;
            }
    
            let productRepeated = this.products.find((element) => element.code === code);
            if (productRepeated) {
                return `The field code ${code} is repeated so this product cannot be save in the list`;
                
            }
            const product = {
                code: code,
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                stock: stock,
                id: this.products.length + 1
            }
    
    
            this.products.push(product);
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, "\t"));
            return this.products
        } catch (error) {
            console.log(error);
        }
     
    }

    getProductById = async (id) => {
        if (fs.existsSync(this.path)) {
            try {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const result = JSON.parse(data);

                let indexValue = result.find((event) => event.id === id);
                if (!indexValue) {
                   
                    return "This product  with this ID does not exist in the file";
                } else {

                    return indexValue;
                }
            } catch (error) {
                console.log(error);
            }

        }

    }
    deleteProducts = async (id) => {
        if (fs.existsSync(this.path)) {
            let productFounded = this.products.find((product) => product.id === id)
            if (productFounded) {
                try {
                    const valor = this.products.filter((event) => event.id!==id);

                    this.products = valor;

                    await fs.promises.writeFile(this.path, JSON.stringify(valor, null, "\t"))
                    return "Product eliminated";

                } catch (error) {
                    console.log(error);
                }

            } else {
                return `The product to delete with the id: ${id} does not exist in the list`
            }

        }

    }
    updateProduct = async (id, code, title, description, price, thumbnail, stock) => {

        try {

            const products = await this.getProducts(); 

            const product = products.find(product => product.id === id) 

            if (!product) {

                console.log(`no se encontro el producto con id ${id}`)

                return

            } else {

                product.code = code,

                    product.title = title,

                    product.description = description,

                    product.price = price,

                    product.thumbnail = thumbnail,

                    product.stock = stock

                await fs.promises.writeFile(this.path, JSON.stringify(products)); //reescribimos el archivo .json ya modificado//

                return console.log(product)

            }

        } catch (error) {

            console.error(error)

        }
    }
}