import { DiscountService } from './../../chapter19/infrastructure/services/discount.service';
import { Component } from "@angular/core";
import { DataRepository } from "../../../models/repository.model";
import { Product } from "../../../models/product.model";

@Component({
  templateUrl: "chapter18.component.html"
})

export class Chapter18Component {
  constructor(private model: DataRepository) {
  }

  addProduct = (p: Product) => {
    this.model.saveProduct(p);
  }
}
