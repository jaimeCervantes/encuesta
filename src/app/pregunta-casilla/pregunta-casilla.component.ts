import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pregunta-casilla',
  templateUrl: './pregunta-casilla.component.html',
  styleUrls: ['./pregunta-casilla.component.scss', '../shared-styles/respuestas.scss']
})
export class PreguntaCasillaComponent implements OnInit {
  @Input() info: Object;
  constructor() { }

  ngOnInit() {
  }

  agregarRespuesta () {
    this.info.respuesta.push({ valor: '', viewValue: ''});
  }

}
