import { Component } from "@angular/core";
import { DataRepository } from "../../../models/repository.model";
import { Product } from "../../../models/product.model";
import { ProductFormGroup } from "./forms/product.form.group";
import { SubmitComponent } from "./base/submit.component";

@Component({
  templateUrl: "chapter17.component.html"
})

export class Chapter17Component {
  constructor(private model: DataRepository) {
  }

  addProduct = (p: Product) => {
    this.model.saveProduct(p);
  }
}
