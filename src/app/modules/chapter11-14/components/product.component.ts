import { Component } from "@angular/core";
import { DataRepository } from "../../../models/repository.model";
import { Product } from "../../../models/product.model";
import { ProductFormGroup } from "./forms/product.form.group";
import { SubmitComponent } from "./base/submit.component";

@Component({
  templateUrl: "product.component.html"
})

export class ProductComponent extends SubmitComponent {
  products: Product[];
  customForm = new ProductFormGroup();

  public selectedIndex: number;
  public someText: string;
  newProduct: Product = new Product(0);

  constructor(private model: DataRepository) {
    super();
    this.products = this.model.getProducts();
  }

  getProduct(id: number): Product {
    if (id > -1) {
      return this.products.find(p => p.id === id);
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductCount(): number {
    return this.products.length;
  }

  getProductName(id: number): string {
    const product = this.getProduct(id);
    return product != null ? product.name : "";
  }

  addProduct = (p: Product) => {
    console.log(this.customForm);
    this.products.push(p);
    this.newProduct = new Product(0);
  }
}
