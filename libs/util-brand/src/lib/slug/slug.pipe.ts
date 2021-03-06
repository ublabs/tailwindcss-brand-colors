import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slug',
})
export class SlugPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .toLowerCase()
      .replace(/\+/g, 'plus')
      .replace(/\./g, 'dot')
      .replace(/&/g, 'and')
      .replace(/đ/g, 'd')
      .replace(/ħ/g, 'h')
      .replace(/ı/g, 'i')
      .replace(/ĸ/g, 'k')
      .replace(/ŀ/g, 'l')
      .replace(/ł/g, 'l')
      .replace(/ß/g, 'ss')
      .replace(/ŧ/g, 't')
      .normalize('NFD')
      .replace(/[^a-z0-9]/g, '');
  }
}
