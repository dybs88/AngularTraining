import { NgModule } from "@angular/core";
import { Chapter1516Component } from "./components/chapter1516.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { PaAttrDirective } from './infrastructure/directives/attr.directive';
import { PaModel } from './infrastructure/directives/twoway.directive';
import { AtSortDirective } from './infrastructure/directives/sort.directive';
import { AtIfDirective } from './infrastructure/directives/if.directive';
import { AtIteratorDirective } from './infrastructure/directives/iterator.directive';
import { AtCellColorDirective } from './infrastructure/directives/cellColor.directive';
import { AtCellColorSwitcherDirective } from './infrastructure/directives/cellColorSwitcher.directive';

@NgModule({
  declarations: [Chapter1516Component, PaAttrDirective, PaModel, AtSortDirective, AtIfDirective, AtIteratorDirective, AtCellColorDirective, AtCellColorSwitcherDirective],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [Chapter1516Component]
})

export class Chapter1516Module { }
