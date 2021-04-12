import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-com-pesquisa-de-casos-por-pais',
  templateUrl: './tabela-com-pesquisa-de-casos-por-pais.component.html',
  styleUrls: ['./tabela-com-pesquisa-de-casos-por-pais.component.css'],
})
export class TabelaComPesquisaDeCasosPorPaisComponent implements OnInit {
  @Input() estadoSelecionado: any;

  constructor() {}

  ngOnInit(): void {}
}
