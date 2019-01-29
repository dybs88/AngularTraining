import { Directive, ViewContainerRef, TemplateRef, Input, DefaultIterableDiffer, IterableDiffers, ChangeDetectorRef, ViewRef } from "@angular/core";

@Directive({
  selector: "[atForOf]"
})

export class AtIteratorDirective {
  private differ: DefaultIterableDiffer<any>;
  private views: Map<any, AtIteratorContext> = new Map<any, AtIteratorContext>();

  @Input("atForOf")
  dataSource: any;

  constructor(private container: ViewContainerRef,
    private template: TemplateRef<Object>,
    private differs: IterableDiffers,
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.differ = <DefaultIterableDiffer<any>>this.differs.find(this.dataSource).create();
  }

  ngDoCheck(): void {
    let changes = this.differ.diff(this.dataSource);
    if (changes !== null) {
      changes.forEachAddedItem(addition => {
        console.log("ngDockCheck called, add change detected");
        let context = new AtIteratorContext(addition.item, addition.currentIndex, changes.length);
        context.view = this.container.createEmbeddedView(this.template, context);
        this.views.set(addition.trackById, context);
      });
      let removals = false;
      changes.forEachRemovedItem(removal => {
        removals = true;
        console.log("ngDockCheck called, remove change detected");
        let context = this.views.get(removal.trackById);
        if (context != null) {
          this.container.remove(this.container.indexOf(context.view));
          this.views.delete(removal.trackById);
        }
      });
      if (removals) {
        let index = 0;
        this.views.forEach(context => context.setData(index++, this.views.size));
      }
    }
  }
}

class AtIteratorContext {
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;
  view: ViewRef;

  constructor(public $implicit: any, public index: number, length: number) {
    this.setData(index, length);

  }

  setData(index: number, length: number) {
    this.odd = index % 2 == 1;
    this.even = index % 2 == 0;
    this.first = index == 0;
    this.last = index + 1 == length;
  }
}
