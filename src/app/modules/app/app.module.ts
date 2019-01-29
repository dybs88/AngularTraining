import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { TraningModule } from "../chapter11-14/training.module";
import { ProductComponent } from "../chapter11-14/components/product.component";
import { Chapter1516Component } from '../chapter15-16/components/chapter1516.component';
import { Chapter1516Module } from '../chapter15-16/chapter1516.module';
import { Chapter17Module } from '../chapter17/chapter17.module';
import { Chapter17Component } from '../chapter17/components/chapter17.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TraningModule,
    Chapter1516Module,
    Chapter17Module,
    RouterModule.forRoot([
      { path: "chapter1114", component: ProductComponent },
      { path: "chapter1516", component: Chapter1516Component },
      { path: "chapter17", component: Chapter17Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [RouterModule]
})
export class AppModule { }
