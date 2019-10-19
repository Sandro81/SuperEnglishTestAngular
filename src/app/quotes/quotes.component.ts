import { Component, OnInit } from '@angular/core';
import {QuoteInterface} from '../quote.interface';

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

}
