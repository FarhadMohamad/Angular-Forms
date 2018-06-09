import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { tv } from './tv';


@Injectable()
export class TvService {
  private url = 'https://api.themoviedb.org/3/tv/';
  private searchUrl = 'https://api.themoviedb.org/3/search/tv';
  private apiKey = 'fbfc0c7a686011a23759b43d186ddc52';
  private language;

  constructor (private http: Http) {
    if (localStorage.getItem('lang') == 'pl') this.language = 'pl';
    else this.language = 'en';
  }

  getTvShows(): Observable<tv[]> {
    let tvUrl = `${this.url}popular?api_key=${this.apiKey}&language=en}`;

    return this.http.get(tvUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  searchTvShow(query: string) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&language=${this.language}&query=${query}`;

    return this.http.get(searchUrl)
      .map((res) => { return res.json() })
  }

  getDetails(id : number) {
    let detailsUrl = `${this.url}${id}?api_key=${this.apiKey}&language=${this.language}`;

    return this.http.get(detailsUrl)
      .map((res) => { return res.json() })
  }

  changeLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.language = lang;
  }

  getLanguage() {
    return this.language;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
