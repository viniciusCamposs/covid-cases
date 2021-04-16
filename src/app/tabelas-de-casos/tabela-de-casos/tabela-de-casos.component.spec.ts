import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDeCasosComponent } from './tabela-de-casos.component';

describe('TabelaDeCasosComponent', () => {
  let component: TabelaDeCasosComponent;
  let fixture: ComponentFixture<TabelaDeCasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDeCasosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDeCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
