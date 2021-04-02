import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelasDeCasosNosEstadosBrasileirosComponent } from './tabelas-de-casos-nos-estados-brasileiros.component';

describe('TabelasDeCasosNosEstadosBrasileirosComponent', () => {
  let component: TabelasDeCasosNosEstadosBrasileirosComponent;
  let fixture: ComponentFixture<TabelasDeCasosNosEstadosBrasileirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelasDeCasosNosEstadosBrasileirosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelasDeCasosNosEstadosBrasileirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
