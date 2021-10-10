export class Quote {
    showquoteDetails:boolean;
  static quote: string;
    constructor(public title:string,public quote:string, public author:string, public publisher:string ,public time:Date){
               this.showquoteDetails = false;
    }
}
