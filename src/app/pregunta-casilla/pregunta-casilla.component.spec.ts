import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaCasillaComponent } from './pregunta-casilla.component';

describe('PreguntaCasillaComponent', () => {
  let component: PreguntaCasillaComponent;
  let fixture: ComponentFixture<PreguntaCasillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaCasillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaCasillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
