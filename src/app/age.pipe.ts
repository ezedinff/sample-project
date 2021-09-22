import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";
@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date | undefined, ...args: unknown[]): unknown {
    if (!value) return ;
    const y =  moment(value).fromNow().toString().split(" ");
    if (y.length < 3) return "";
    return y[0];
  }

}
