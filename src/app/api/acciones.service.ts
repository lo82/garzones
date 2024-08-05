import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { accion } from '../class/accion';
import { acciones } from '../class/acciones';
import { GeneralResponseDTO } from '../class/dto/GeneralResponseDTO';
import { DatePipe } from '@angular/common';
import { Acciones } from '../class/classA';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccionesService {
  url = `${environment.HOST}/api/acciones`;
  url2 = `${environment.HOST}/api`;

  private refresh = new Subject<void>();
  constructor(private http: HttpClient,public miDatePipe: DatePipe) { }

  get refresh$() {
    return this.refresh;
  }

  public crear(): Observable<accion[]> {
    return this.http.get<accion[]>(this.url);
  }

  postCrearAcciones(data: Acciones) {
    return this.http
      .post<Acciones>(
        this.url,
        data
      ).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }


  postCrearAcciones3(data: acciones) {
    return this.http
      .post<acciones>(
        this.url,
        data
      ).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }




  postCrearAcciones2(data: accion) {
    return this.http
      .post<accion>(
        this.url,
        data
      ).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }



  public findAll(): Observable<accion[]> {
    return this.http.get<accion[]>(this.url);
  }

  public cierrecaja(): Observable<accion[]>{
    let fecha1=new Date()
    let fecha2=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');

    console.log(fechaf1,fechaf2)
    return this.http.get<accion[]>(this.url + '/informes/' + fechaf1 + '/' + fechaf2);

  }

  public cajatotal(): Observable<accion[]>{
    let fecha1=new Date()
    let fecha2=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');

    return this.http.get<accion[]>(this.url + '/cierrecaja/' + fechaf1 + '/' + fechaf2);

  }


  public chicaportrago(id: number): Observable<accion>{
   return this.http.get<accion>(this.url + '/tragos/' + id);
  }

  public pagocliente(id: number): Observable<Acciones[]>{
    return this.http.get<Acciones[]>(this.url + '/pagocliente/' + id);
   }

  buscarPorDia(nombre: string,fecha: string): Observable<accion[]>{
    console.log(fecha)
    return this.http.get<accion[]>(this.url + '/dia/' + nombre + '/' + fecha);
  }

  putActualizarAccion(data: accion, id: number) {
    return this.http
      .put<accion>(this.url2 + '/accionestado/' + id, data)
      .pipe(
        map((resp) => new GeneralResponseDTO(resp)),
        catchError((error: any) => this.handleError(error))
      );
  }
  putActualizarAccion1(data: Acciones, id: number) {
    return this.http
      .put<accion>(this.url2 + '/accionestado/' + id, data)
      .pipe(
        map((resp) => new GeneralResponseDTO(resp)),
        catchError((error: any) => this.handleError(error))
      );
  }


  handleError(error: any): any {
    throw new Error('error');
  }

  getListaChicasPorTrago(id: number): Observable<accion[]>{

    return this.http.get<accion[]>(this.url + '/tragos/'  + id);

  }


  private listners = new Subject<any>;
  listen():Observable<any>{
    return this.listners.asObservable();
  }

  filter(filterBy: string){
    this.listners.next(filterBy);
  }

  getUser(user:string): Observable<accion[]>{
    return this.http.get<accion[]>(this.url2 + '/nombreusuarioid/'  + user);
  }
}
