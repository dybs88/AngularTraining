
import { Component } from "@angular/core";
import localePL from '@angular/common/locales/pl';
import localeUS from '@angular/common/locales/en-US-POSIX';
import localeEN from '@angular/common/locales/en';
import localeFR from '@angular/common/locales/fr';
import localeDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: "locale",
  templateUrl: "locale.component.html"
})

export class LocaleComponent {
  selectedLocale: string = localStorage.getItem("locale_id");

  constructor() {
    if(localStorage.getItem("locale_id") === "") {
      localStorage.setItem("locale_id","pl-PL");
    }

    registerLocaleData(this.locale);
  }

  get locale(): any {
    switch(localStorage.getItem("locale_id")) {
      case "pl-PL":
        return localePL;
      case "en-US":
        return localeUS;
      case "en-EN":
        return localeEN;
      case "fr-FR":
        return localeFR;
      case "de-DE":
        return localeDE;
    }
  }

  changeAppLocale(locale: string) {
    switch(locale) {
      case "pl-PL":
        registerLocaleData(localePL);
        localStorage.setItem("locale_id","pl-PL");
        break;
      case "en-US":
        registerLocaleData(localeUS);
        localStorage.setItem("locale_id","en-US");
        break;
      case "en-EN":
        registerLocaleData(localeEN);
        localStorage.setItem("locale_id","en-EN");
        break;
      case "fr-FR":
        registerLocaleData(localeFR);
        localStorage.setItem("locale_id","fr-FR");
        break;
      case "de-DE":
        registerLocaleData(localeDE);
        localStorage.setItem("locale_id","de-DE");
        break;
    }

    window.location.reload();
  }

  get localeSetting(): string {
    return localStorage.getItem("locale_id");
  }
}
