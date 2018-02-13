export interface Pregunta  {
  pregunta: string;
  tipo: string;
  respuesta?: string | Array<Object>;
  opciones?: Array<Object>;
}
