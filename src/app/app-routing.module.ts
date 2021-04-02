import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelasDeCasosNosEstadosBrasileirosComponent } from './tabelas-de-casos/tabelas-de-casos-nos-estados-brasileiros/tabelas-de-casos-nos-estados-brasileiros.component';

const routes: Routes = [
  {
    path: '',
    component: TabelasDeCasosNosEstadosBrasileirosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
