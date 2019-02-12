import { DataRepository } from './../../../../models/repository.model';
import { Component, Input } from "@angular/core";
import { Product } from '../../../../models/product.model';

@Component({
  selector: "atProductTable",
  templateUrl: "productTable.component.html"
})

export class ProductTableComponent {
  @Input("data")
  data: DataRepository;
  taxRate: number = 0;
  selectedCategory: string = "";
  currencySymbol: string = "PLN";

  getProducts(): Product[] {
    return this.data.getProducts();
  }

  getProduct(id: number): Product {
    return this.data.getProduct(id);
  }

  deleteProduct(id: number) {
    this.data.deleteProduct(id);
  }
}
