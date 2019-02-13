import { DiscountService } from './../../infrastructure/services/discount.service';
import { Component, Input } from "@angular/core";

@Component({
  selector: "discount-display",
  templateUrl: "discountDisplay.component.html"
})

export class DiscountDisplayComponent {
  constructor(private discounter: DiscountService) { }

}
