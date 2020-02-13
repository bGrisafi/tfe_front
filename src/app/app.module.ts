import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ArticlesListComponent } from './components/articles/articles-list/articles-list.component';
import { ArticlesItemComponent } from './components/articles/articles-item/articles-item.component';
import { OeuvresListComponent } from './components/oeuvres/oeuvres-list/oeuvres-list.component';
import { OeuvresItemComponent } from './components/oeuvres/oeuvres-item/oeuvres-item.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AccueilComponent,
    NavigationComponent,
    ArticlesListComponent,
    ArticlesItemComponent,
    OeuvresListComponent,
    OeuvresItemComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
