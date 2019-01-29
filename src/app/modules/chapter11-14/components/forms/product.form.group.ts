import { FormGroup, Validators } from "@angular/forms";
import { ProductFormControl } from "./product.form.control";
import { LimitValidator } from "src/app/infrastructure/validators/limit.validator";
import { Product } from "src/app/models/product.model";

export class ProductFormGroup extends FormGroup {
  constructor() {
    super({
      name: new ProductFormControl("Nazwa:", "name", "text", "", Validators.required),
      category: new ProductFormControl("Kategoria:", "category", "text", "",
        Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10),
        Validators.pattern("^[A-Za-z]{3,10}")])),
      price: new ProductFormControl("Cena:", "price", "number", "", Validators.compose([Validators.required, LimitValidator.Limit(100)]))
    });
  }

  get ProductControls(): ProductFormControl[] {
    return Object.keys(this.controls).map(k => this.controls[k] as ProductFormControl);
  }

  get ModelFromForm(): Product {
    return new Product(
      0,
      this.controls["name"].value,
      this.controls["category"].value,
      this.controls["price"].value
    );
  }
}
