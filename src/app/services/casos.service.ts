import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasosService {

  constructor(
    private http: HttpClient
  ) { }

  getDadosPorEstadosBrasileiros(): Observable<any> {
    return this.http.get(`https://covid19-brazil-api.now.sh/api/report/v1`);
  }

  getBandeiraDosEstados(uf: any): Observable<any> {
    return this.http.get(`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`, { responseType: 'blob' });
  }

  getDadosDoBrasil(): Observable<any> {
    return this.http.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil`);
  }

  getDadosDaEspanha(): Observable<any> {
    return this.http.get(`https://covid19-brazil-api.now.sh/api/report/v1/spain`);
  }

  getDadosNaItalia(): Observable<any> {
    return this.http.get(`https://covid19-brazil-api.now.sh/api/report/v1/italy`);
  }

  getDadosDaFranca(): Observable<any> {
    return this.http.get(`https://covid19-brazil-api.now.sh/api/report/v1/france`);
  }

}
