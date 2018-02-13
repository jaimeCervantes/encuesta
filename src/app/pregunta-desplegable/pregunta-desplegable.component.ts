import { Component, OnInit, Input } from '@angular/core';
import { Encuesta } from '../interfaces/encuesta';

@Component({
  selector: 'app-pregunta-desplegable',
  templateUrl: './pregunta-desplegable.component.html',
  styleUrls: ['./pregunta-desplegable.component.scss', '../shared-styles/respuestas.scss']
})
export class PreguntaDesplegableComponent implements OnInit {
  @Input() info: Encuesta;
  constructor() { }

  ngOnInit() {
  }

  agregarRespuesta () {
    this.info.opciones.push({ valor: '', viewValue: ''});
  }


}
