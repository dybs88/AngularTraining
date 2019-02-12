import { Pipe } from "@angular/core";
import { Product } from 'src/app/models/product.model';

@Pipe({
  name: "filter",
  pure: false
})

export class AtCategoryFilterPipe {
  transform(products: Product[], category: string) {
    return category === undefined || category === "" ? products : products.filter(p => p.category === category);
  }
}
