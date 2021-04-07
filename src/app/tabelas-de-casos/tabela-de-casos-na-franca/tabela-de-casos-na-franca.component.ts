import { CasosService } from './../../services/casos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-de-casos-na-franca',
  templateUrl: './tabela-de-casos-na-franca.component.html',
  styleUrls: ['./tabela-de-casos-na-franca.component.css'],
})
export class TabelaDeCasosNaFrancaComponent implements OnInit {
  public dadosFranca: any = '';

  constructor(private casosService: CasosService) {}

  ngOnInit(): void {
    this.getDadosDaFranca();
  }

  getDadosDaFranca(): void {
    // tslint:disable-next-line: deprecation
    this.casosService.getDadosDaFranca().subscribe(
      (data: any) => {
        this.dadosFranca = data.data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
