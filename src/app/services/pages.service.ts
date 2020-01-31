import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CRUDService} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class PagesService extends CRUDService {
  constructor(protected http: HttpClient) {
    super(http, 'pages');
  }
}
