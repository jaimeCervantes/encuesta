import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../services/encuesta.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss']
})
export class EdicionComponent implements OnInit {
  encuesta: any;
  subscription: Subscription;
  constructor(private encServ: EncuestaService) { }

  ngOnInit() {
    this.subscription = this.encServ
    .getEncuesta()
    .subscribe( datos => {
      this.encuesta = datos;
    });
  }

  crearPregunta (tipo) {

  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
