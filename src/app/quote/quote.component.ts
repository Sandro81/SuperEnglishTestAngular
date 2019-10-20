import {Component, Input, OnInit} from '@angular/core';
import {QuoteInterface} from '../quote.interface';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote: QuoteInterface;

  constructor() { }

  ngOnInit() {
  }

}
