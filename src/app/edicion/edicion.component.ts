import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { EncuestaService } from '../services/encuesta.service';
import { Subscription } from 'rxjs/Subscription';
import { Pregunta } from '../interfaces/pregunta';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss']
})
export class EdicionComponent implements OnInit, OnDestroy {
  encuesta: any;
  subscription: Subscription;
  @Output() preguntasListas = new EventEmitter<Array<Object>>();
  constructor(private encServ: EncuestaService) { }

  ngOnInit() {
    this.subscription = this.encServ
    .getEncuesta()
    .subscribe( datos => {
      this.setDatos(datos);
    });
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

  setDatos (datos) {
    datos.preguntas.forEach(element => {
      element.edicion = false;
    });

    datos.titulo = { pregunta: datos.titulo, edicion: false };

    this.encuesta = datos;
    this.preguntasListas.emit(this.encuesta.preguntas);
  }

  crearPregunta (tipo: string) {
    const pregunta: Pregunta = {
      tipo: tipo,
      pregunta: ''
    };

    switch (tipo) {
      case 'texto':
        pregunta.respuesta = '';
        this.encuesta.preguntas.push(pregunta);
        break;
      case 'casilla':

        pregunta.respuesta = [{
          valor: false,
          viewValue: ''
        }];

        this.encuesta.preguntas.push(pregunta);
        break;
      case 'desplegable':

        pregunta.respuesta = '';
        pregunta.opciones = [{
          valor: '',
          viewValue: ''
        }];

        this.encuesta.preguntas.push(pregunta);
        break;
    }
    this.preguntasListas.emit(this.encuesta.preguntas);
  }
}
