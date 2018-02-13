import { Component, OnInit, OnDestroy } from '@angular/core';
import { EncuestaService } from '../services/encuesta.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss']
})
export class EdicionComponent implements OnInit, OnDestroy {
  encuesta: any;
  subscription: Subscription;
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

  crearPregunta (tipo) {
    alert(tipo);
  }

  setDatos (datos) {
    datos.preguntas.forEach(element => {
      element.edicion = false;
    });

    datos.titulo = { pregunta: datos.titulo, edicion: false };

    this.encuesta = datos;
  }

}
