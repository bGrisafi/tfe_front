import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export abstract class CRUDService {
  url: string;
  constructor(protected http: HttpClient, url) {

    this.url = environment.api_url + url;
  }

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  public getOneById(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  public deleteOneById(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  public addOne(value: any): Observable<any> {
    return this.http.post<any>(this.url, value);
  }

  public replaceOne(id: number, value: any): Observable<any> {
    return this.http.put<any>(this.url + '/' + id, value);
  }
}
