import { TestBed, inject } from '@angular/core/testing';

import { EncuestaService } from './encuesta.service';

describe('EncuestaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EncuestaService]
    });
  });

  it('should be created', inject([EncuestaService], (service: EncuestaService) => {
    expect(service).toBeTruthy();
  }));
});
