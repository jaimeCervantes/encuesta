import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// importar animaciones para el navegador web
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// importar los componentes a utlizar
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule
 } from '@angular/material';

import { EdicionComponent } from './edicion/edicion.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryData } from './services/in-memory-db';
import { EncuestaService } from './services/encuesta.service';
import { PreguntaComponent } from './pregunta/pregunta.component';


@NgModule({
  declarations: [
    AppComponent,
    EdicionComponent,
    PreguntaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryData, { dataEncapsulation: false }
    )
  ],
  providers: [EncuestaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
