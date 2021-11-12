import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /** Lo que hace este pipe es filtrar los elementos que coincidan con la palabra que yo le paso */
  transform(value: any, arg: any): any {
    const result = [];
    for(const item of value){
      if(item.name.indexOf(arg) > -1){
        result.push(item);
      };
    };
    return result;
  }

}
