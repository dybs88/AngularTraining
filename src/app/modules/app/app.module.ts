import { Chapter18Module } from './../chapter18/chapter18.module';
import { Chapter18Component } from './../chapter18/components/chapter18.component';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { TraningModule } from "../chapter11-14/training.module";
import { ProductComponent } from "../chapter11-14/components/product.component";
import { Chapter1516Component } from '../chapter15-16/components/chapter1516.component';
import { Chapter1516Module } from '../chapter15-16/chapter1516.module';
import { Chapter17Module } from '../chapter17/chapter17.module';
import { Chapter17Component } from '../chapter17/components/chapter17.component';
import { LocaleComponent } from './components/locale.component';

@NgModule({
  declarations: [
    AppComponent,
    LocaleComponent
  ],
  imports: [
    BrowserModule,
    TraningModule,
    Chapter1516Module,
    Chapter17Module,
    Chapter18Module,
    RouterModule.forRoot([
      { path: "chapter1114", component: ProductComponent },
      { path: "chapter1516", component: Chapter1516Component },
      { path: "chapter17", component: Chapter17Component },
      { path: "chapter18", component: Chapter18Component }
    ])
  ],
  providers: [{ provide: LOCALE_ID, useValue: localStorage.getItem("locale_id")}],
  bootstrap: [AppComponent],
  schemas: [RouterModule]
})
export class AppModule { }
