import { DataSource } from "./datasource.model";
import { Product } from "./product.model";
import { generate, Observable } from "rxjs";

export class DataRepository {
  private data: DataSource;
  private products: Product[];

  constructor() {
    this.data = new DataSource();
    this.products = new Array<Product>();
    this.data.getProducts().forEach(p => this.products.push(p));
  }

  getProducts() {
    return this.products;
  }

  getProduct(productId: number): Product {
    return this.products.find(p => p.id === productId);
  }

  saveProduct(product: Product): Product {
    if (product.id === 0) {
      product.id = this.generateId();
      this.products.push(product);
    } else {
      this.products.splice(this.products.findIndex(p => p.id === product.id), 1, product);
    }

    return product;
  }

  deleteProduct(productId: number) {
    const index = this.products.findIndex(p => p === productId);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  generateId(): number {
    let candidate = 0;
    while (this.getProduct(candidate) !== null) {
      candidate++;
    }

    return candidate;
  }
}
