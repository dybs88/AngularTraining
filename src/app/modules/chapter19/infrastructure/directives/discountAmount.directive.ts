import { DiscountService } from './../services/discount.service';
import { ChangeDetectorRef, Input, SimpleChanges } from '@angular/core';
import { Directive, KeyValueDiffer, KeyValueDiffers } from '@angular/core';

@Directive({
  selector: "td[at-price]",
  exportAs: "discount"
})

export class AtDiscountAmountDirective {
  private differ: KeyValueDiffer<any, any>;

  constructor(private keyValueDiffers: KeyValueDiffers, private changeDetector: ChangeDetectorRef, private discountService: DiscountService) { }

  @Input("at-price")
  originalPrice: number;

  discountAmount: number;

  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.discountService).create();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["originalPrice"] != null) {
      this.updateValue();
    }
  }

  ngDoCheck(): void {
    if(this.differ.diff(this.discountService) != null) {
      this.updateValue();
    }
  }

  private updateValue() {
    this.discountAmount = this.originalPrice - this.discountService.applyDiscount(this.originalPrice);
  }
}
