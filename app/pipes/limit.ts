import {Pipe} from '@angular/core'

@Pipe({
  name: 'limit'
})
export class LimitPipe {
  transform(value: any[], limit: number) : any[] {
    //Default the limit to 10 if undefined
    limit = limit !== undefined ? limit : 10;
    //Limit the array size by the limit
    return value.length > limit ? value.slice(0, limit) : value;
  }
}