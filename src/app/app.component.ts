import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AvailableLanguages, AvailablesLanguages } from './transloco-config';
import { Languages } from './interfaces/languages.interface';

@Component({
  selector: 'app-root',
  imports: [TranslocoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  #transloco: TranslocoService = inject(TranslocoService);
  url = signal('https://www.youtube.com/watch?v=906y-aTDSKI');

  public languages = signal<Languages[]>([
    { code: AvailableLanguages.ES, name: 'languages.es' },
    { code: AvailableLanguages.EN, name: 'languages.en' },
  ]);

  // public changeLanguage(lang: AvailableLanguages): void {
  //   this.#transloco.setActiveLang(lang);
  // }

  changeLanguage = (lang: AvailableLanguages): void => {
    this.#transloco.setActiveLang(lang);
  };

  get Language(): string {
    return `languages.${this.#transloco.getActiveLang()}`;
  }
}
