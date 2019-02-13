import { AtCategoryFilterPipe } from './infrastructure/pipes/categoryFilter.pipe';
import { AtAddTaxPipe } from './infrastructure/pipes/addTax.pipe';
import { ProductFormComponent } from './../chapter18/components/product/productForm.component';
import { ProductTableComponent } from './../chapter18/components/product/product.Table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { Chapter18Component } from "./components/chapter18.component";
import { BrowserModule } from "@angular/platform-browser";
import { DiscountService } from '../chapter19/infrastructure/services/discount.service';

@NgModule({
  declarations: [Chapter18Component, ProductTableComponent, ProductFormComponent, AtAddTaxPipe, AtCategoryFilterPipe],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [Chapter18Component]
})

export class Chapter18Module { }
