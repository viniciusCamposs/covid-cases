import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaDeCasosNosEstadosBrasileirosComponent } from './tabelas-de-casos/tabela-de-casos-nos-estados-brasileiros/tabela-de-casos-nos-estados-brasileiros.component';
import { TabelaDeCasosNoBrasilComponent } from './tabelas-de-casos/tabela-de-casos-no-brasil/tabela-de-casos-no-brasil.component';
import { TabelaDeCasosNaEspanhaComponent } from './tabelas-de-casos/tabela-de-casos-na-espanha/tabela-de-casos-na-espanha.component';
import { TabelaDeCasosNaItaliaComponent } from './tabelas-de-casos/tabela-de-casos-na-italia/tabela-de-casos-na-italia.component';
import { TabelaDeCasosNaFrancaComponent } from './tabelas-de-casos/tabela-de-casos-na-franca/tabela-de-casos-na-franca.component';
import { TabelaComPesquisaDeCasosPorPaisComponent } from './tabelas-de-casos/tabela-com-pesquisa-de-casos-por-pais/tabela-com-pesquisa-de-casos-por-pais.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TabelaDeCasosNosEstadosBrasileirosComponent,
    TabelaDeCasosNoBrasilComponent,
    TabelaDeCasosNaEspanhaComponent,
    TabelaDeCasosNaItaliaComponent,
    TabelaDeCasosNaFrancaComponent,
    TabelaComPesquisaDeCasosPorPaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
    FormsModule,
    BrowserAnimationsModule,
    NzSelectModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
