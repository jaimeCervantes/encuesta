import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pregunta-desplegable',
  templateUrl: './pregunta-desplegable.component.html',
  styleUrls: ['./pregunta-desplegable.component.scss']
})
export class PreguntaDesplegableComponent implements OnInit {
  @Input() info: Object;
  constructor() { }

  ngOnInit() {
  }

}
