import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDeCasosNoBrasilComponent } from './tabela-de-casos-no-brasil.component';

describe('TabelaDeCasosNoBrasilComponent', () => {
  let component: TabelaDeCasosNoBrasilComponent;
  let fixture: ComponentFixture<TabelaDeCasosNoBrasilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDeCasosNoBrasilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDeCasosNoBrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
