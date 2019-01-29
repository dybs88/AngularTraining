import { NgModule } from "@angular/core";
import { ProductComponent } from "./components/product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ProductComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [ProductComponent]
})

export class TraningModule { }
