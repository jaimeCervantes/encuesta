import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryData implements InMemoryDbService {
  createDb () {
    const encuesta = {
      titulo: 'Titulo de encuesta',
      preguntas: [
        {
          pregunta: '¿Cual es tu nombre?',
          respuesta: 'Jaime Cervantes Velasco',
          tipo: 'texto'
        },
        {
          pregunta: '¿Qué tecnologías conoces?',
          tipo: 'casilla',
          respuesta: [
            {
              valor: false,
              viewValue: 'HTML'
            },
            {
              valor: false,
              viewValue: 'Javascript'
            },
            {
              valor: false,
              viewValue: 'CSS'
            }
          ]
        },
        {
          pregunta: '¿Cual es tu framework favorito?',
          respuesta: 'polymer',
          tipo: 'desplegable',
          opciones: [
            {
              valor: 'polymer',
              viewValue: 'Polymer'
            },
            {
              valor: 'angular',
              viewValue: 'Angular'
            },
            {
              valor: 'vue',
              viewValue: 'Vue'
            }
          ]
        }
      ]
    };

    return { encuesta };
  }
}
