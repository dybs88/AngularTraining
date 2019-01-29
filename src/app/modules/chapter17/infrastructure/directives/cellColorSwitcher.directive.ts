import { Directive, Input, ContentChild, SimpleChanges, ContentChildren, QueryList } from "@angular/core";
import { AtCellColorDirective } from './cellColor.directive';

@Directive({
  selector: "table"
})

export class AtCellColorSwitcherDirective {
  @Input("atCellDarkColor")
  modelProperty: boolean;

  @ContentChildren(AtCellColorDirective)
  contentChildren: QueryList<AtCellColorDirective>;

  ngOnChanges(changes: SimpleChanges): void {
    this.updateContentChildren(changes["modelProperty"].currentValue);
  }

  private updateContentChildren(dark: boolean) {
    if (this.contentChildren !== null && dark !== undefined) {
      this.contentChildren.forEach((child, index) => {
        child.setColor(index % 2 ? dark : !dark);
      });
    }
  }
}
