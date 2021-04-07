import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaDeCasosNosEstadosBrasileirosComponent } from './tabelas-de-casos/tabela-de-casos-nos-estados-brasileiros/tabela-de-casos-nos-estados-brasileiros.component';
import { TabelaDeCasosNoBrasilComponent } from './tabelas-de-casos/tabela-de-casos-no-brasil/tabela-de-casos-no-brasil.component';
import { TabelaDeCasosNaEspanhaComponent } from './tabelas-de-casos/tabela-de-casos-na-espanha/tabela-de-casos-na-espanha.component';
import { TabelaDeCasosNaItaliaComponent } from './tabelas-de-casos/tabela-de-casos-na-italia/tabela-de-casos-na-italia.component';
import { TabelaDeCasosNaFrancaComponent } from './tabelas-de-casos/tabela-de-casos-na-franca/tabela-de-casos-na-franca.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaDeCasosNosEstadosBrasileirosComponent,
    TabelaDeCasosNoBrasilComponent,
    TabelaDeCasosNaEspanhaComponent,
    TabelaDeCasosNaItaliaComponent,
    TabelaDeCasosNaFrancaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
