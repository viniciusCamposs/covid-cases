import { CasosService } from './../../services/casos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-de-casos-na-espanha',
  templateUrl: './tabela-de-casos-na-espanha.component.html',
  styleUrls: ['./tabela-de-casos-na-espanha.component.css'],
})
export class TabelaDeCasosNaEspanhaComponent implements OnInit {
  public dadosEspanha: any = '';

  constructor(private casosService: CasosService) {}

  ngOnInit(): void {
    this.getCasosNaEspanha();
  }

  getCasosNaEspanha(): void {
    // tslint:disable-next-line: deprecation
    this.casosService.getDadosDaEspanha().subscribe(
      (data: any) => {
        this.dadosEspanha = data.data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
