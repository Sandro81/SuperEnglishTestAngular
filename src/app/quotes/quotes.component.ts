import { Component, OnInit } from '@angular/core';
import {QuoteInterface} from '../quote.interface';
import {Quote} from '@angular/compiler';
import {HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: QuoteInterface[];

  constructor() { }

  ngOnInit() {
  }

  onGetQuotes(){
    this.quoteService.getQuotes()
      .subscribe(
        (quotes: Quote[]) => this.quotes = quotes,
        (error: HttpResponse) => console.log(error);
      );
  }

}
