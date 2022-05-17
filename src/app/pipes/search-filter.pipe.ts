import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../models/note';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
   
    let bodyArray : Note[] = list.filter(item => item.text.search(new RegExp(filterText, 'i')) > -1);
    let titleArray : Note[] = list.filter(item => item.title.search(new RegExp(filterText, 'i')) > -1);    
    return Array.from( new Set(bodyArray.concat( titleArray)));
  }

}
