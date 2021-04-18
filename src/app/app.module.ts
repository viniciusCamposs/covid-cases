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
import { TabelaComPesquisaDeCasosPorPaisComponent } from './tabelas-de-casos/tabela-com-pesquisa-de-casos-por-pais/tabela-com-pesquisa-de-casos-por-pais.component';
import { TabelaDeCasosComponent } from './tabelas-de-casos/tabela-de-casos/tabela-de-casos.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TabelaDeCasosNosEstadosBrasileirosComponent,
    TabelaComPesquisaDeCasosPorPaisComponent,
    TabelaDeCasosComponent,
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
