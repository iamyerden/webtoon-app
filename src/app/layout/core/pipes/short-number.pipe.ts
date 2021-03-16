import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === null) return null
    if (value === 0) return '0';
    let fractionSize = 1;
    let abs = Math.abs(value);
    let rounder = Math.pow(10, fractionSize);
    let isNegative = value < 0;
    let key = '';
    let powers = [{ key: "B", value: Math.pow(10, 9) }, { key: "M", value: Math.pow(10, 6) }, { key: "k", value: 1000 }];
    for (let i = 0; i < powers.length; i++) {
      var reduced = abs / powers[i].value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        abs = reduced;
        key = powers[i].key;
        break;
      }
    }
    return (isNegative ? '-' : '') + abs + key;
  }

}
