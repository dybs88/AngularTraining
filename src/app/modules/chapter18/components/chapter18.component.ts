import { Component } from "@angular/core";
import { DataRepository } from "../../../models/repository.model";
import { Product } from "../../../models/product.model";

@Component({
  templateUrl: "chapter18.component.html"
})

export class Chapter18Component {
  model: DataRepository;



  constructor() {
    this.model = new DataRepository();
  }

  addProduct = (p: Product) => {
    this.model.saveProduct(p);
  }
}
