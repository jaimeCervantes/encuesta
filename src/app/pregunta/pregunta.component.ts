import { Component, Input, ElementRef, HostListener } from '@angular/core';
import { Encuesta } from '../interfaces/encuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent {
  private _info: any;

  @Input()
  set info(info: any ) {
    if (info.hasOwnProperty('pregunta')) {
      this._info = info;
    } else {
      this._info = { pregunta: info };
    }
  }

  get info () {
    return this._info;
  }

  constructor(private elemRef: ElementRef) { }

  @HostListener('document:click', ['$event']) clickAfuera(event) {
    if (this.elemRef.nativeElement.contains(event.target)) {
      this._info.edicion = true;
    } else {
      this._info.edicion = false;
    }
  }
}
