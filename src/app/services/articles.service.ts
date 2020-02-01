import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CRUDService} from './crud.service';
import {Observable} from 'rxjs';
import {Article} from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService extends CRUDService {

  constructor(protected http: HttpClient) {
    super(http, 'articles');
  }

  public getArticlesPagination(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url + '?page=1');
  }
}
