
import {QuotesComponent} from './quotes/quotes.component';
import {NewQuoteComponent} from './new-quote/new-quote.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
const APP_ROUTES: Routes = [
  { path: '', component: QuotesComponent},
  { path: 'new-quote',  component: NewQuoteComponent},
]


//https://www.youtube.com/watch?time_continue=22&v=g4GLfjcYhoQ
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
