import 'hammerjs';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from 'ng2-translate';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot()
    // TranslateModule.forRoot({
    // provide: TranslateLoader,
    // useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
    // deps: [Http]
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
