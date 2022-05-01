import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piper'
})
export class PiperPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
