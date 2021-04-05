import { CasosService } from '../../services/casos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-de-casos-nos-estados-brasileiros',
  templateUrl: './tabela-de-casos-nos-estados-brasileiros.component.html',
  styleUrls: ['./tabela-de-casos-nos-estados-brasileiros.component.css']
})
export class TabelaDeCasosNosEstadosBrasileirosComponent implements OnInit {

  public casos: any;
  public bandeiras: any;

  constructor(
    private casosService: CasosService
  ) { }

  ngOnInit(): void {
    this.getDadosPorEstadosBrasileiros();
  }

  getDadosPorEstadosBrasileiros(): void {
    // tslint:disable-next-line: deprecation
    this.casosService.getDadosPorEstadosBrasileiros().subscribe(
      (data: any) => {
        this.casos = data.data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getBandeiraDosEstados(uf: any): void {
    // tslint:disable-next-line: deprecation
    this.casosService.getBandeiraDosEstados(uf).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
