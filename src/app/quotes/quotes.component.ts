import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'; 
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]=[
    new Quote('Quote 1','Believe you can, and you are halfway there!','-Theodore Roosevelt','Ian'),
    // new Quote('Quote 2','The only person you are destined to become is the person you decide to be.','-Ralph Waldo Emerson','Innocent'),
    // new Quote('Quote 3','Nothing is impossible, the word itself says, I am possible!' ,'-Audrey Hepburn','Salim'),
  ]
  addNewQuote(goal){
    // let quoteLength = this.quotes.length;
    // Quote.title = quoteLength+1;
    // Quote.quote = new Quote(Quote.quote)
    // this.quotes.push(quotes)
  }
   showDetails(index:number){
     this.quotes[index].showquoteDetails =  !this.quotes[index].showquoteDetails;
   }
   removeThisQuote(removeQuote,index){
    if (removeQuote) {
      let toDelete = confirm('Are you sure you want to delete ?')
      if (toDelete){
      this.quotes.splice(index,1);
    }

  }
   }
  constructor() { }

  ngOnInit(): void {
  }

}
