import { Component, OnInit } from '@angular/core';
import { CasosService } from './services/casos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'covid-cases';

  estados: any;
  estadoSelecionado: any;

  paises: any;
  paisSelecionado: any;
  paisesIniciais = ['brazil', 'spain', 'italy', 'france'];
  pais: Array<any> = [];

  constructor(private casosService: CasosService) {}

  ngOnInit(): void {
    this.inicializarDados();
  }

  inicializarDados(): void {
    this.getEstados();
    this.getPaises();
    this.getEstadoSelecionado('SP');
    this.getPaisSelecionado('portugal');

    for (const paisInicial of this.paisesIniciais) {
      this.getPais(paisInicial);
    }
  }

  getEstados(): void {
    this.estados = this.casosService.getNomeDosEstadosBrasileiros();
  }

  getPaises(): void {
    this.paises = this.casosService.getNomeDosPaises();
  }

  getEstadoSelecionado(estado: any): void {
    // tslint:disable-next-line: deprecation
    this.casosService.getDadosPorEstadoBrasileiroSelecionado(estado).subscribe(
      (data: any) => {
        this.estadoSelecionado = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getPaisSelecionado(pais: any): void {
    // tslint:disable-next-line: deprecation
    this.casosService.getDadosPorPaisSelecionado(pais).subscribe(
      (data: any) => {
        if (data.data.country) {
          this.paisSelecionado = data.data;
        } else {
          this.paisSelecionado = {};
          this.paisSelecionado.country = 'Pais não encontrado!';
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getPais(pais: any): any {
    // tslint:disable-next-line: deprecation
    this.casosService.getDadosPorPaisSelecionado(pais).subscribe(
      (data: any) => { this.pais.push(data.data); },
      (error: any) => { console.error(error); }
    );
  }
}
