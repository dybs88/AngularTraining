
import { SubmitComponent } from './../base/submit.component';
import { Component, Output, EventEmitter } from "@angular/core";
import { ProductFormGroup } from '../forms/product.form.group';
import { Product } from '../../../../models/product.model';

@Component({
  selector: "atProductForm",
  templateUrl: "productForm.component.html"
})

export class ProductFormComponent extends SubmitComponent {
  constructor() {
    super();
    this.customForm = new ProductFormGroup();
  }

  @Output("atNewProduct")
  newProductEvent = new EventEmitter<Product>();

  onProductAdded = (product: Product) => {
    this.newProductEvent.emit(product);
  }
}
