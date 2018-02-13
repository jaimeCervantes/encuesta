import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable()
export class EncuestaService {

  private urlPeopleApi = '/api/encuesta';

  constructor (private http: HttpClient) {}

  getEncuesta () {
    return this.http
      .get(this.urlPeopleApi).pipe(delay(1000));
  }
}
