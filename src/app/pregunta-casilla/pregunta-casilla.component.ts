import { Component, OnInit, Input } from '@angular/core';
import { Encuesta } from '../interfaces/encuesta';

@Component({
  selector: 'app-pregunta-casilla',
  templateUrl: './pregunta-casilla.component.html',
  styleUrls: ['./pregunta-casilla.component.scss', '../shared-styles/respuestas.scss']
})
export class PreguntaCasillaComponent implements OnInit {
  @Input() info: Encuesta;
  constructor() { }

  ngOnInit() {
  }

  agregarRespuesta () {
    this.info.respuesta.push({ valor: '', viewValue: ''});
  }

}
