import { DiscountService } from './../services/discount.service';
import { Pipe } from '@angular/core';

@Pipe({
  name: "discount",
  pure: false
})

export class AtDiscountPipe {
  constructor(private discountService: DiscountService) { }

  transform(price: number): number {
    return this.discountService.applyDiscount(price);
  }
}
