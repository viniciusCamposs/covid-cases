import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDeCasosNaEspanhaComponent } from './tabela-de-casos-na-espanha.component';

describe('TabelaDeCasosNaEspanhaComponent', () => {
  let component: TabelaDeCasosNaEspanhaComponent;
  let fixture: ComponentFixture<TabelaDeCasosNaEspanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDeCasosNaEspanhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDeCasosNaEspanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
