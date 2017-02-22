import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate';
import { FileUploadModule } from 'ng2-file-upload';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ContentComponent} from './components/pages/content/content.component';
import {HeaderSearchComponent} from './components/header/header-search/header-search.component';
import {MainFilterComponent} from './components/main-filter/main-filter.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { PlacesComponent } from './components/pages/places/places.component';
import { PlaceImageComponent } from './components/pages/places/place-image/place-image.component';
import { PlaceShortInfoComponent } from './components/pages/places/place-short-info/place-short-info.component';
import { PlaceRoomComponent } from './components/pages/places/place-room/place-room.component';
import { PlaceGuideComponent } from './components/pages/places/place-guide/place-guide.component';
import { PlaceCommentsComponent } from './components/pages/places/place-comments/place-comments.component';

const appRoutes: Routes = [
  {
    path: 'search',
    component: SearchPageComponent
  },
  { path: 'place', component: PlacesComponent },

  { path: '',
    pathMatch: 'full',
    component: ContentComponent
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    FooterComponent,
    ContentComponent,
    MainFilterComponent,
    PageNotFoundComponent,
    SearchPageComponent,
    PlacesComponent,
    PlaceImageComponent,
    PlaceShortInfoComponent,
    PlaceRoomComponent,
    PlaceGuideComponent,
    PlaceCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FileUploadModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
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
