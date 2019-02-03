import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Cliente} from './cliente.model';

@Injectable()
export class ClienteService {

  public API = '//localhost:8080';
  public CLIENTE_API = this.API + '/cliente';
  public PLANO_API = this.API + '/plano';
  public COBERTURA_API = this.API + '/cobertura';
  public PROCEDIMENTO_API = this.API + '/procedimento';

  constructor(private http: HttpClient) { }

  save(cliente: Cliente): Observable<any> {
    return  this.http.post(this.CLIENTE_API, cliente);
   }

   getPlan(): Observable<any> {
    return this.http.get(this.PLANO_API);
   }

   getProcedimento(): Observable<any> {
    return this.http.get(this.PROCEDIMENTO_API);
   }

   getCoverage(idPlano, idProcedimento): Observable<any> {
    return this.http.get(`${this.COBERTURA_API}/${idPlano}/${idProcedimento}`);
   }

}
