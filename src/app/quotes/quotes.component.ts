import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'; 
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]=[
    new Quote('Quote 1','Believe you can, and you are halfway there!','-Theodore Roosevelt','5'),
    new Quote('Quote 2','The only person you are destined to become is the person you decide to be.','-Ralph Waldo Emerson','4'),
    new Quote('Quote 3','Nothing is impossible, the word itself says, ‘I am possible!' ,'-Audrey Hepburn','3'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
