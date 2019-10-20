import {Injectable} from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable
export class QuoteService {
  constructor(private http: Http) {

  }

  getQuotes(){
    return this.http.get('http://localhost/superenglishtest/public/api/quotes').map(
      (response: Response) => {
        return response.json().quotes;
      }
    );
  }
}
