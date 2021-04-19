import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CasosService {
  constructor(private http: HttpClient) {}

  getDadosPorEstadosBrasileiros(): Observable<any> {
    return this.http.get(`https://covid19-brazil-api.now.sh/api/report/v1`);
  }

  getDadosPorEstadoBrasileiroSelecionado(estado: string): Observable<any> {
    return this.http.get(
      `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${estado}`
    );
  }

  getDadosPorPaisSelecionado(pais: string): Observable<any> {
    return this.http.get(`https://covid19-brazil-api.now.sh/api/report/v1/${pais}`);
  }

  getBandeiraDosEstados(uf: string): Observable<any> {
    return this.http.get(
      `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`,
      { responseType: 'blob' }
    );
  }

  getNomeDosEstadosBrasileiros(): Observable<any> {
    return this.http.get(`../../assets/dados/estados.json`);
  }

  getNomeDosPaises(): Observable<any> {
    return this.http.get(`../../assets/dados/paises.json`);
  }
}
