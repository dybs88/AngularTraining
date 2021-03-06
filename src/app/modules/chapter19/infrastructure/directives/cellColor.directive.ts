import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "td"
})

export class AtCellColorDirective {
  @HostBinding("class")
  bgClass: string = "";

  setColor(dark: boolean) {
    this.bgClass = dark ? "bg-dark" : "";
  }
}
