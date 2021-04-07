import { CasosService } from './../../services/casos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-de-casos-no-brasil',
  templateUrl: './tabela-de-casos-no-brasil.component.html',
  styleUrls: ['./tabela-de-casos-no-brasil.component.css'],
})
export class TabelaDeCasosNoBrasilComponent implements OnInit {
  public dadosNoBrasil: any = '';

  constructor(private casosService: CasosService) {}

  ngOnInit(): void {
    this.getDadosNoBrasil();
  }

  getDadosNoBrasil(): void {
    // tslint:disable-next-line: deprecation
    this.casosService.getDadosDoBrasil().subscribe(
      (data: any) => {
        this.dadosNoBrasil = data.data;
        console.log('Dados no Brasil: ', data.data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
