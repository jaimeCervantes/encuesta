import { Component, ViewChild } from '@angular/core';

import { EdicionComponent } from './edicion/edicion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Encuesta';
  @ViewChild(EdicionComponent) edicionComp: EdicionComponent;

  crearPregunta (tipo) {
    this.edicionComp.crearPregunta(tipo);
  }
}
