import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { tap, map, filter } from 'rxjs/operators';


@Injectable
export class QuoteService {
  constructor(private http: HttpClient) {

  }

  getQuotes() {
    return this.http.get('http://localhost/superenglishtest/public/api/quotes')
      .map(
        (response: Response) => {
          return response.json().quotes;
        }
      );
  }
}
