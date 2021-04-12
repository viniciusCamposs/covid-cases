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

  constructor(private casosService: CasosService) {}

  ngOnInit(): void {
    this.getEstados();
    this.getEstadoSelecionado('SP');
  }

  getEstados(): void {
    this.estados = this.casosService.getNomeDosEstadosBrasileiros();
  }

  getEstadoSelecionado(estado: any): void {
    // tslint:disable-next-line: deprecation
    this.casosService.getDadosPorEstadoBrasileiroSelecionado(estado).subscribe(
      (data: any) => {
        this.estadoSelecionado = data;
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
