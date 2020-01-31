import { Injectable } from '@angular/core';
import {CRUDService} from './crud.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlidersService extends CRUDService {

  constructor(protected http: HttpClient) {
    super(http, 'sliders');
  }
}
