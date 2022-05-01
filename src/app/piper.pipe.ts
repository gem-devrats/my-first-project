import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piper'
})
export class PiperPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const today = new Date();
    const birth = new Date(value);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0) {
      age--;
    }

    return age;
  }

}
