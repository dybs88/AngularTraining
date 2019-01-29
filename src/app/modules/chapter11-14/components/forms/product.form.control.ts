import { FormControl } from "@angular/forms";


export class ProductFormControl extends FormControl {
  label: string;
  modelProperty: string;
  type: string;

  constructor(label: string, property: string, type: string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.modelProperty = property;
    this.type = type;
  }

  getValidationMessages() {
    const messages: string[] = [];

    if (this.errors) {
      for (const errorName in this.errors) {
        if (this.errors[errorName]) {
          switch (errorName) {
            case "required":
              messages.push(`Pole ${this.label} jest wymagane`);
              break;
            case "minlength":
              messages.push(`Pole ${this.label} musi zawierać conajmniej ${this.errors["minlength"].requiredLength} znaków`);
              break;
            case "maxlength":
              messages.push(`Pole ${this.label} musi zawierać maksymalnie ${this.errors["maxlength"].maxLength} znaków`);
              break;
            case "pattern":
              messages.push(`Pole ${this.label} nie jest zgodne ze wzorcem`);
              break;
            case "limit":
              messages.push(`${this.label} nie może być większa niż ${this.errors["limit"].limit}`);
              break;
          }
        }
      }
    }

    return messages;
  }
}
