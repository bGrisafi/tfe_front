import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AccueilComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'Fr' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
