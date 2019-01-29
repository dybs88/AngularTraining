import { NgModule } from "@angular/core";
import { Chapter17Component } from "./components/chapter17.component";
import { BrowserModule } from "@angular/platform-browser";
import { ProductTableComponent } from './components/product/product.Table.component';
import { ProductFormComponent } from './components/product/productForm.component';

@NgModule({
  declarations: [Chapter17Component, ProductTableComponent, ProductFormComponent],
  imports: [BrowserModule],
  exports: [Chapter17Component]
})

export class Chapter17Module { }
