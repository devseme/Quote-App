export class Quote {
    showquoteDetails:boolean;
    constructor(public title:string,public quote:string, public author:string, public vote:string ){
               this.showquoteDetails = false;
    }
}
