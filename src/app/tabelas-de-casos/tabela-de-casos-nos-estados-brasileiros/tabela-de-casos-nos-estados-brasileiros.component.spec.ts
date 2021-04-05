import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDeCasosNosEstadosBrasileirosComponent } from './tabela-de-casos-nos-estados-brasileiros.component';

describe('TabelasDeCasosNosEstadosBrasileirosComponent', () => {
  let component: TabelaDeCasosNosEstadosBrasileirosComponent;
  let fixture: ComponentFixture<TabelaDeCasosNosEstadosBrasileirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDeCasosNosEstadosBrasileirosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDeCasosNosEstadosBrasileirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
