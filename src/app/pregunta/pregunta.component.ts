import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent implements OnInit {
  private _info: Object;

  @Input()
  set info(info: Object | string) {
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

  ngOnInit() {
  }

  @HostListener('document:click', ['$event']) clickAfuera(event) {
    if (this.elemRef.nativeElement.contains(event.target)) {
      this._info.edicion = true;
    } else {
      this._info.edicion = false;
    }
  }
}
