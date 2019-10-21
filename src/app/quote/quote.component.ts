import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: QuoteService;
  constructor() { }

  ngOnInit() {
  }

}
