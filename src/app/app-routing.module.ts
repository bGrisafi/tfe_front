import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from './components/accueil/accueil.component';
import {ArticlesItemComponent} from './components/articles/articles-item/articles-item.component';
import {OeuvresItemComponent} from "./components/oeuvres/oeuvres-item/oeuvres-item.component";

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: 'accueil', component: AccueilComponent},
  { path: 'articles/details/:id', component: ArticlesItemComponent},
  { path: 'oeuvres/details/:id', component: OeuvresItemComponent},
  { path: '**', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
