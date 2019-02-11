import { Product } from 'src/app/models/product.model';
import { DataRepository } from './../../../../models/repository.model';
import { Component, Input } from "@angular/core";

@Component({
  selector: "atProductTable",
  templateUrl: "productTable.component.html"
})

export class ProductTableComponent {
  @Input("data")
  data: DataRepository;

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
