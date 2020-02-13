import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from './components/accueil/accueil.component';
import {ArticlesItemComponent} from './components/articles/articles-item/articles-item.component';
import {OeuvresItemComponent} from "./components/oeuvres/oeuvres-item/oeuvres-item.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'homepage', component: AccueilComponent},
  { path: 'articles/details/:id', component: ArticlesItemComponent},
  { path: 'artworks/details/:id', component: OeuvresItemComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
