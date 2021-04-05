import { CasosService } from './../../services/casos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-de-casos-na-italia',
  templateUrl: './tabela-de-casos-na-italia.component.html',
  styleUrls: ['./tabela-de-casos-na-italia.component.css']
})
export class TabelaDeCasosNaItaliaComponent implements OnInit {

  public dadosItalia: any = '';

  constructor(
    private casosService: CasosService
  ) { }

  ngOnInit(): void {
    this.getDadosNaItalia();
  }

  getDadosNaItalia(): void {
    // tslint:disable-next-line: deprecation
    this.casosService.getDadosNaItalia().subscribe(
      (data: any) => {
        this.dadosItalia = data.data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
