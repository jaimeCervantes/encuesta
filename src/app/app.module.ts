import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
  MatIconModule } from '@angular/material';

import { EdicionComponent } from './edicion/edicion.component';


@NgModule({
  declarations: [
    AppComponent,
    EdicionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
