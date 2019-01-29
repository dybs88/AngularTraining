import { Component } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "AngularTraining";

  env: boolean = environment.production;

  constructor(private router: Router) { }

  chapter1114() {
    this.router.navigateByUrl("/chapter1114");
  }
}
