import { DiscountService } from './../../infrastructure/services/discount.service';
import { Component, Input } from "@angular/core";

@Component({
  selector: "discount-edit",
  templateUrl: "discountEditor.component.html"
})

export class DiscountEditorComponent {
  constructor(private discounter: DiscountService) { }
}
