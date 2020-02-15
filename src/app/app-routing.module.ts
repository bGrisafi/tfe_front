import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from './components/accueil/accueil.component';
import {ArticlesItemComponent} from './components/articles/articles-item/articles-item.component';
import {OeuvresItemComponent} from "./components/oeuvres/oeuvres-item/oeuvres-item.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ArticlesListComponent} from "./components/articles/articles-list/articles-list.component";
import {OeuvresListComponent} from "./components/oeuvres/oeuvres-list/oeuvres-list.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'homepage', component: AccueilComponent},
  { path: 'articles', component: ArticlesListComponent},
  { path: 'articles/details/:id', component: ArticlesItemComponent},
  { path: 'artworks', component: OeuvresListComponent},
  { path: 'artworks/details/:id', component: OeuvresItemComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  {path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
