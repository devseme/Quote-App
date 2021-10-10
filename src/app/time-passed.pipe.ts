import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value:any): any {
    if(value){
     let timeinSeconds = Math.floor((+new Date()- +value)/1000);
     if (timeinSeconds < 60){
       return timeinSeconds + " seconds passed";
     } 

     let secondsInMin = 60;

     let minutes =  Math.floor(timeinSeconds / secondsInMin);

     if (minutes == 1){
       return 'Created '+ minutes +' minute(s) ago';
     }
     if (minutes >=1 && minutes < 60){
       return 'Created '+minutes +' minutes(s) ago';
     }
     let secondsInHours = 3600;
     let hours = Math.floor(timeinSeconds / secondsInHours);
     if (hours >=1 && hours < 25){
       return 'Posted '+hours +' hour(s) ago';
     }
     let secondsWithinDay = 86400;

     let days=Math.floor(timeinSeconds/secondsWithinDay)
     if(days >=1){
       return days +"days since the quote was created";
     }
    }
    else{
      return value;
    }
  }

}
