import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDeCasosNaFrancaComponent } from './tabela-de-casos-na-franca.component';

describe('TabelaDeCasosNaFrancaComponent', () => {
  let component: TabelaDeCasosNaFrancaComponent;
  let fixture: ComponentFixture<TabelaDeCasosNaFrancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDeCasosNaFrancaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDeCasosNaFrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
