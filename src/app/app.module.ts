import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelasDeCasosNosEstadosBrasileirosComponent } from './tabelas-de-casos/tabelas-de-casos-nos-estados-brasileiros/tabelas-de-casos-nos-estados-brasileiros.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelasDeCasosNosEstadosBrasileirosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
