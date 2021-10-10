import { Quote } from '../quote';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()quote!:Quote;
  @Output()removeQuote =new EventEmitter<boolean>();
  
    deleteQuote(removetheQuote:boolean){
      this.removeQuote.emit(removetheQuote);
    }
    
  

  constructor() { }

  ngOnInit(): void {
  }

}
