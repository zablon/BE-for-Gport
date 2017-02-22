import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ContentComponent} from './components/content/content.component';
import {HeaderSearchComponent} from './components/header/header-search/header-search.component';
import {MainFilterComponent} from './components/main-filter/main-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    FooterComponent,
    ContentComponent,
    MainFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    // TranslateModule.forRoot()
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: translateFactory,
      deps: [Http]
    })
  ],
  providers: [
    {provide: 'Window', useValue: window}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
  }
}

function translateFactory(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}
