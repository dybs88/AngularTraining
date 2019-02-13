import { DataRepository } from './../../../../models/repository.model';

import { SubmitComponent } from './../base/submit.component';
import { Component, Output, EventEmitter } from "@angular/core";
import { ProductFormGroup } from '../forms/product.form.group';
import { Product } from '../../../../models/product.model';

@Component({
  selector: "atProductForm",
  templateUrl: "productForm.component.html"
})

export class ProductFormComponent extends SubmitComponent {
  constructor(private data: DataRepository) {
    super();
    this.customForm = new ProductFormGroup();
  }

  onProductAdded = (product: Product) => {
    this.data.saveProduct(product);
  }
}
