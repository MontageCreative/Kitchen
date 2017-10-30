import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let minutes;
    let seconds = value;

    // get decimal minutes (i.e 90 / 60 === 1.5)
    minutes = value / 60;

    // convert 1.5 to 1
    minutes = parseInt(minutes, 10);

    // get seconds (90 - 60)
    seconds = value - minutes * 60;

    // set initial 0
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    // set initial 0
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    return `${minutes}: ${seconds}`;
  }
}
