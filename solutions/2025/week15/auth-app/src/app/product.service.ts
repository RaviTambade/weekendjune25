

import  {Product} from './product.entity';

var products: Product[] = [
    {
        id: 1,
        title: 'Product 1',
        price: 10.99,
        description: 'Description for Product 1',
        category: 'Category 1',
        imageUrl: 'https://via.placeholder.com/150',
        rating: {
            rate: 4.5,
            count: 10
        }
    },
    {
        id: 2,
        title: 'Product 2', 
        price: 20.99,
        description: 'Description for Product 2',
        category: 'Category 2',
        imageUrl: 'https://via.placeholder.com/150',
        rating: {
            rate: 4.0,
            count: 8
        }
    }
];
export
class ProductService {
    
  getProducts() : Product[]{
    return products;
  }

    addProduct(product: Product) {
        let allProducts = this.getProducts();
      products.push(product);
    }

    updateProduct(index: number, product: Product) {
        let allProducts = this.getProducts();
        products[index] = product;
    }

    deleteProduct(index: number) {
        //scope variable
        //meaning local to this method
        let allProducts = this.getProducts();
        products.splice(index, 1);
    }
}


//global code to test the service
let svc=new ProductService();
console.log(svc.getProducts());

let newProduct: Product = {
    id: 3,
    title: 'Product 3',
    price: 30.99,
    description: 'Description for Product 3',
    category: 'Category 3',
    imageUrl: 'https://via.placeholder.com/150',
    rating: {
        rate: 4.7,
        count: 12
    }
};

svc.addProduct(newProduct);

svc.deleteProduct(1);
console.log(svc.getProducts());

let updatedProduct: Product = { id: 3,
    title: 'Product 3',
    price: 30.99,
    description: 'Description for Product 3',
    category: 'Category 3',
    imageUrl: 'https://via.placeholder.com/150',
    rating: {
        rate: 4.7,
        count: 12
    }
};
svc.updateProduct(1, updatedProduct);
console.log(svc.getProducts());
