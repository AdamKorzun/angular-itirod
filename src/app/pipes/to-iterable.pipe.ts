import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../models/note';

@Pipe({
  name: 'toIterable'
})
export class ToIterablePipe implements PipeTransform {

  transform(value: any[], numColumns: number, colNum: number): Note[] {
    if (value.length === 0) return value;
    if (numColumns < 1 || colNum < 1 || isNaN(numColumns) || isNaN(colNum) ||colNum > numColumns) {
      console.error("Invalid column configuration");
      return value;
    }
    return value.filter((val, index) => {
      return index % numColumns  === colNum-1;
    });
  }

}
