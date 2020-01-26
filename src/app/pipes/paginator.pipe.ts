import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginator'
})
export class PaginatorPipe implements PipeTransform {

  transform(products: any[], page_size: number, page_number: number): any[] {
    if (!products.length) return[];

    page_size = page_size || 8;

    page_number = page_number || 1;

    --page_number;


    return products.slice(page_number * page_size, (page_number + 1) * page_size)
  }

}
