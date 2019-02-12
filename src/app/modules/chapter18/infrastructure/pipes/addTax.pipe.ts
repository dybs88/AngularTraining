import { Pipe } from "@angular/core";

@Pipe({
  name: "addTax"
})

export class AtAddTaxPipe {
  defaultRate: number = 23;

  transform(value: any, rate?: any): number {
    let valueNumber = Number.parseFloat(value);
    let rateValue = rate === undefined ? this.defaultRate : Number.parseInt(rate);
    return (valueNumber + (valueNumber * (rateValue / 100)));
  }
}
