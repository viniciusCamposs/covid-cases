import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDeCasosNaItaliaComponent } from './tabela-de-casos-na-italia.component';

describe('TabelaDeCasosNaItaliaComponent', () => {
  let component: TabelaDeCasosNaItaliaComponent;
  let fixture: ComponentFixture<TabelaDeCasosNaItaliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDeCasosNaItaliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDeCasosNaItaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
