import { Component, OnInit } from '@angular/core';
import {QuoteInterface} from '../quote.interface';
import {Quote} from '@angular/compiler';
import {Response} from "@angular/http";

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
        (error: Response) => console.log(error);
      );
  }

}
