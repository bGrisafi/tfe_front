import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
export abstract class CRUDService {
  url: string;
  constructor(protected http: HttpClient, url) {

    this.url = environment.api_url + url;
  }



  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url+ "?pagination=false");
  }

  //récupère un certain nombre de pages
  public getPages(pageNumber: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + '?page=' + pageNumber);
  }

  public getOneById(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  public getSubRessource(id: number, ressource: string): Observable<any>{
    return this.http.get<any>(this.url + '/' + id +'/' + ressource + '.json');
  }
  public getSubRessources(id: number, ressource: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/' + id +'/' + ressource  + '.json?pagination=false');
  }

  public deleteOneById(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  public addOne(value: any): Observable<any> {
    return this.http.post<any>(this.url, value, httpOptions);
  }

  public replaceOne(id: number, value: any): Observable<any> {
    return this.http.put<any>(this.url + '/' + id, value);
  }
}
