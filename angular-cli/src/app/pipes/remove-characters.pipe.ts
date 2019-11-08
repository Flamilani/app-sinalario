import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeCharacters'
})
export class RemoveCharactersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

}
