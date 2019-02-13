import { Injectable } from '@angular/core';
import { DataSource } from "./datasource.model";
import { Product } from "./product.model";
import { generate, Observable } from "rxjs";
@Injectable()
export class DataRepository {
  private products: Product[];

  constructor(private data: DataSource) {
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
    product.date = new Date();
    if (product.id === 0) {
      product.id = this.generateId();
      this.products.push(product);
    } else {
      this.products.splice(this.products.findIndex(p => p.id === product.id), 1, product);
    }

    return product;
  }

  deleteProduct(productId: number) {
    const index = this.products.findIndex(p => p.id === productId);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  generateId(): number {
    let candidate = 0;
    while (this.getProduct(candidate) !== undefined) {
      candidate++;
    }

    return candidate;
  }

  sort(sortData: any) {
    let propertyName = sortData["propertyName"];
    let direction = sortData["sortDirection"];
    this.products = this.products.sort((p1, p2) => {
      if (direction === "desc") {
        if (p1[propertyName] > p2[propertyName])
          return 1;
        else
          return -1;
      }
      else {
        if (p1[propertyName] > p2[propertyName])
          return -1;
        else
          return 1;
      }
    });
  }
}
