import { AtDiscountPipe } from './infrastructure/pipes/discount.pipe';
import { DiscountService } from './infrastructure/services/discount.service';
import { DiscountEditorComponent } from './components/discount/discountEditor.component';
import { AtCategoryFilterPipe } from './infrastructure/pipes/categoryFilter.pipe';
import { AtAddTaxPipe } from './infrastructure/pipes/addTax.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductTableComponent } from './components/product/product.Table.component';
import { ProductFormComponent } from './components/product/productForm.component';
import { Chapter19Component } from './components/chapter19.component';
import { DiscountDisplayComponent } from './components/discount/discountDisplay.component';
import { AtDiscountAmountDirective } from './infrastructure/directives/discountAmount.directive';

@NgModule({
  declarations: [Chapter19Component, ProductTableComponent, ProductFormComponent, AtAddTaxPipe, AtCategoryFilterPipe,
                 DiscountDisplayComponent, DiscountEditorComponent, AtDiscountPipe, AtDiscountAmountDirective],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [Chapter19Component],
  providers: [DiscountService]
})

export class Chapter19Module { }
