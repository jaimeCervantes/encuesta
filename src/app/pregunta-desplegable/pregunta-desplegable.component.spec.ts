import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaDesplegableComponent } from './pregunta-desplegable.component';

describe('PreguntaDesplegableComponent', () => {
  let component: PreguntaDesplegableComponent;
  let fixture: ComponentFixture<PreguntaDesplegableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaDesplegableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaDesplegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
