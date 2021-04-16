import { CasosService } from './../../services/casos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-de-casos',
  templateUrl: './tabela-de-casos.component.html',
  styleUrls: ['./tabela-de-casos.component.css'],
})
export class TabelaDeCasosComponent implements OnInit {
  @Input() estado: any;
  @Input() pais: any;

  constructor(private casosService: CasosService) {}

  ngOnInit(): void {}
}
