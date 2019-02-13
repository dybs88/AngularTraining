import { NgForm, FormGroup } from "@angular/forms";
import { ValidationComponent } from "./validation.component";

export class SubmitComponent extends ValidationComponent {
  protected formSubmitted: boolean;
  protected customForm: FormGroup;

  protected constructor() { super(); }

  protected stringify(object: any): string {
    return JSON.stringify(object);
  }

  protected submitForm(form: NgForm, callback: Function, jsonData: string) {
    this.formSubmitted = true;

    if (form.valid) {
      callback(JSON.parse(jsonData));
      form.reset();
      this.formSubmitted = false;
    }
  }

  protected submitReactiveForm(callback: Function, jsonData: string) {
    this.formSubmitted = true;

    if (this.customForm.valid) {
      callback(JSON.parse(jsonData));
      this.customForm.reset();
      this.formSubmitted = false;
    }
  }
}
