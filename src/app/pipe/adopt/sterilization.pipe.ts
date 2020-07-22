import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sterilization'
})
export class SterilizationPipe implements PipeTransform {

  transform(value: string): string {
    let result = '未輸入'
    switch(value){
      case 'T':
        result = '是';
        break;
      case 'F':
          result = '否';
        break;
    }
    return result;
  }
}


@Pipe({
  name: 'bodyType'
})
export class BodyTypePipe implements PipeTransform {

  transform(value: string): string {
    let result = ''
    switch(value){
      case 'SMALL':
        result = '小型';
        break;
      case 'MEDIUM':
          result = '中型';
        break;
        case 'BIG':
          result = '大型';
        break;
    }
    return result;
  }
}

@Pipe({
  name: 'bacterin'
})
export class BacterinPipe implements PipeTransform {

  transform(value: string): string {
    let result = '未輸入'
    switch(value){
      case 'T':
        result = '是';
        break;
      case 'F':
          result = '否';
        break;
    }
    return result;
  }
}

@Pipe({
  name: 'sex'
})
export class Sex implements PipeTransform {

  transform(value: string): string {
    let result = '未輸入'
    switch(value){
      case 'M':
        result = '公';
        break;
      case 'F':
          result = '母';
        break;
    }
    return result;
  }
}