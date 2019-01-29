import { Product } from "./product.model";

export class DataSource {
  private products: Product[];

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Kajak", "Sporty wodne", 275),
      new Product(2, "Kamizelka", "Sporty wodne", 48.95),
      new Product(3, "Piłka", "Piłka nożna", 19.50),
      new Product(4, "Flagi narożne", "Piłka nożna", 34.95),
      new Product(5, "Szachy", "Szachy", 16),
      new Product(6, "Kij hokejowy", "Hokej", 75),
      new Product(7, "Rakieta tenisowa", "Tenis", 55),
      new Product(8, "Korki", "Piłka nożna", 179),
      new Product(9, "Kask hokejowy", "Hokej", 69),
      new Product(10, "Ochraniacze", "Hokej", 99)
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}
