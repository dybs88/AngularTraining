import { Directive, Input, Output, EventEmitter, HostListener, SimpleChanges, ElementRef } from "@angular/core";

@Directive({
  selector: "th[at-sort]",
  exportAs: "atSort"
})
export class AtSortDirective {
  private sortDirection: string;
  @Input("at-sort")
  array: any[];
  @Output("atSortChange")
  update = new EventEmitter<any>();

  constructor(private element: ElementRef) { }

  get sortIcon() {
    return (this.sortDirection === "desc" ? "fas fa-sort-down" : "fas fa-sort-up" || "fas fa-sort")
  }

  @HostListener("click")
  sort(): void {
    let propertyName = this.element.nativeElement.attributes["name"].value;
    if (this.sortDirection === null || this.sortDirection === "asc")
      this.sortDirection = "desc";
    else
      this.sortDirection = "asc";

    this.array = this.array.sort((i1, i2) => {
      if (this.sortDirection === "desc") {
        if (i1[propertyName] > i2[propertyName])
          return 1;
        else
          return -1;
      }
      else {
        if (i1[propertyName] > i2[propertyName])
          return -1;
        else
          return 1;
      }
    });

    this.update.emit(this.array);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sortDirection = "desc";
  }
}
