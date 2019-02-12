import { Directive, Input, HostBinding, SimpleChanges, Output, EventEmitter, HostListener } from "@angular/core";

@Directive({
  selector: "input[paModel]",
  exportAs: "paModel"
})

export class PaModel {
  @Input("paModel")
  modelProperty: string;

  @Output("paModelChange")
  update = new EventEmitter<string>();

  @HostBinding("value")
  fieldValue: string = "";

  @HostListener("input", ["$event.target.value"])
  updateValue(newValue: string) {
    this.fieldValue = newValue;
    this.update.emit(newValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes["modelProperty"];
    if (change.currentValue !== this.fieldValue) {
      this.fieldValue = changes["modelProperty"].currentValue || "";
    }
  }
}
