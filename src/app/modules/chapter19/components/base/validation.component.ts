
export class ValidationComponent {

  protected constructor() { }

  protected getValidationMessages(state: any, thingName?: string): string[] {
    const thing: string = state.path || thingName;
    const messages: string[] = new Array<string>();

    if (state.errors) {
      for (const errorName of state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`Pole ${thing} jest wymagane`);
            break;
          case "minlength":
            messages.push(`Pole ${thing} musi zawierać conajmniej ${state.errors["minlength"].requiredLength} znaków`);
            break;
          case "maxlength":
            messages.push(`Pole ${thing} musi zawierać maksymalnie ${state.errors["maxlength"].maxLength} znaków`);
            break;
        }
      }
    }

    return messages;
  }
}
