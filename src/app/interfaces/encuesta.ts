import { Pregunta } from './pregunta';

export interface Encuesta  {
  titulo: string;
  respuesta?: any;
  preguntas?: any;
  opciones?: Array<any>;
  edicion?: boolean;
}
