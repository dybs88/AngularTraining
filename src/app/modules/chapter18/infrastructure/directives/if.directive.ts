import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChanges } from "@angular/core";

@Directive({
  selector: "[atIf]"
})
export class AtIfDirective {
  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) { }

  @Input("atIf")
  expressionResult: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes["expressionResult"];
    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      this.container.createEmbeddedView(this.template);
    }
  }
}
