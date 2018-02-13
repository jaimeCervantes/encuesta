import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contadorTipo'
})
export class ContadorTipoPipe implements PipeTransform {

  transform(value: Array<Object>, tipo?: string): number {
    let contador = 0;
    const tipoElemento = tipo || 'texto';
    value.forEach(elem => {
      if (elem.tipo === tipoElemento) {
        contador += 1;
      }
    });

    return contador;
  }

}
