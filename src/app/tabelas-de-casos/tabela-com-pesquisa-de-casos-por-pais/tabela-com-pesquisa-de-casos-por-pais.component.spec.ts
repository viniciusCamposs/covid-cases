import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaComPesquisaDeCasosPorPaisComponent } from './tabela-com-pesquisa-de-casos-por-pais.component';

describe('TabelaComPesquisaDeCasosPorPaisComponent', () => {
  let component: TabelaComPesquisaDeCasosPorPaisComponent;
  let fixture: ComponentFixture<TabelaComPesquisaDeCasosPorPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaComPesquisaDeCasosPorPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaComPesquisaDeCasosPorPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
