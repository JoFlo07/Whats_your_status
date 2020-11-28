import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(value: number): unknown {
    return new Date(value).toLocaleTimeString('en-us');
  }

}
