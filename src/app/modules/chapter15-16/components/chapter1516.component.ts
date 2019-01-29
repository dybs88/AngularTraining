import { Component } from "@angular/core";
import { DataRepository } from "../../../models/repository.model";
import { Product } from "../../../models/product.model";
import { ProductFormGroup } from "./forms/product.form.group";
import { SubmitComponent } from "./base/submit.component";

@Component({
  templateUrl: "chapter1516.component.html"
})

export class Chapter1516Component extends SubmitComponent {
  model: DataRepository;
  products: Product[];
  newProduct: Product;

  get name() {
    return this.customForm.controls["name"].value;
  }

  set name(text: string) {
    this.customForm.controls["name"].setValue(text);
  }

  set category(text: string) {
    this.customForm.controls["category"].setValue(text);
  }

  showDiv: boolean;
  darkColor: boolean;

  constructor() {
    super();
    this.model = new DataRepository();
    this.customForm = new ProductFormGroup();
    this.products = this.model.getProducts();
    this.newProduct = (this.customForm as ProductFormGroup).ModelFromForm;
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct = (p: Product) => {
    this.products.push(p);
  }

  deleteProduct(id: number) {
    this.products.splice(this.products.findIndex(p => p.id == id), 1);
  }

  setCategory(category: string) {
    this.customForm.controls["category"].setValue(category);
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
