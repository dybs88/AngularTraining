import { Product } from "./product.model";
import { Injectable } from '@angular/core';

@Injectable()
export class DataSource {
  private products: Product[];

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Kajak", "Sporty wodne", 275, new Date("08-27-1988")),
      new Product(2, "Kamizelka", "Sporty wodne", 48.95, new Date("02-12-2019")),
      new Product(3, "Piłka", "Piłka nożna", 19.50, new Date("08-26-2017")),
      new Product(4, "Flagi narożne", "Piłka nożna", 34.95, new Date("08-28-1989")),
      new Product(5, "Szachy", "Szachy", 16, new Date("01-01-1953")),
      new Product(6, "Kij hokejowy", "Hokej", 75, new Date("06-13-2001")),
      new Product(7, "Rakieta tenisowa", "Tenis", 55, new Date("09-11-2001")),
      new Product(8, "Korki", "Piłka nożna", 179, new Date("01-01-966")),
      new Product(9, "Kask hokejowy", "Hokej", 69, new Date("07-04-1792")),
      new Product(10, "Ochraniacze", "Hokej", 99, new Date("08-27-1989"))
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}
