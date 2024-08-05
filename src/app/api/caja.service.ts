import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject,throwError } from 'rxjs';
import { Acciones } from '../class/classA';
import { catchError, map } from 'rxjs/operators'
import { Total_dia } from '../class/classA';

@Injectable({
  providedIn: 'root'
})
export class CajaService {
  url = `${environment.HOST}/api/acciones`;
  url2 = `${environment.HOST}/api`;

  constructor(private http: HttpClient,private miDatePipe: DatePipe) { }

cierrecaja(): Observable<Acciones[]>{
    let fecha1=new Date()
    let fecha2=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');

   
    return this.http.get<Acciones[]>(this.url + '/informes/' + fechaf1 + '/' + fechaf2); 

  }

  bcaja(): Observable<Total_dia[]>{
    let fecha1=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');

 
    return this.http.get<Total_dia[]>(this.url2 + '/bcaja/' + fechaf1); 

  }

  public cajatotal(): Observable<Acciones[]>{
    let fecha1=new Date()
    let fecha2=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');

    return this.http.get<Acciones[]>(this.url + '/cierrecaja/' + fechaf1 + '/' + fechaf2); 

  }

  getEventos(): Observable<Acciones[]>{
    let fecha1=new Date()
    let fecha2=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');
    //return of (USUARIOS);
    return this.http.get<Acciones[]>(this.url+ '/informes/' + fechaf1 + '/' + fechaf2).pipe(
      catchError(e=> {
        return throwError(e);
      }),
      map((response) => {
      let rev = response as Acciones[];
      return rev.map(res =>{
        return res;
      });
    }) 
    )  
  }

  public findia(): Observable<Acciones[]>{
    let fecha1=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    console.log(fechaf1)
    return this.http.get<Acciones[]>(this.url + '/findia/' + fechaf1 ).pipe(
      catchError(e=> {
        return throwError(e);
      }),
      map((response) => {
      let rev = response as Acciones[];
      return rev.map(res =>{
        return res;
      });
    }) 
    )  
}

getInformes(fecha1,fecha2): Observable<Acciones[]>{

  const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
  const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');
  //return of (USUARIOS);
  return this.http.get<Acciones[]>(this.url+ '/informes/' + fechaf1 + '/' + fechaf2).pipe(
    catchError(e=> {
      return throwError(e);
    }),
    map((response) => {
    let rev = response as Acciones[];
    return rev.map(res =>{
      return res;
    });
  }) 
  )  
}

getInformesusuario(ids): Observable<Acciones[]>{
  let fecha1=new Date()
  let fecha2=new Date()
  const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
  const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');
  //return of (USUARIOS);
  return this.http.get<Acciones[]>(this.url+ '/cierrecaja/id/' + fechaf1 + '/' + fechaf2 + '/' +ids).pipe(
    catchError(e=> {
      return throwError(e);
    }),
    map((response) => {
    let rev = response as Acciones[];
    return rev.map(res =>{
      return res;
    });
  }) 
  )  
}

getInformesusuariosemana(ids,fecha11,fecha22): Observable<Acciones[]>{
  const fechaf1 = this.miDatePipe.transform(fecha11, 'yyyy-MM-dd');
  const fechaf2 = this.miDatePipe.transform(fecha22, 'yyyy-MM-dd');
  //return of (USUARIOS);
  return this.http.get<Acciones[]>(this.url+ '/informes/id/' + fechaf1 + '/' + fechaf2 + '/' +ids).pipe(
    catchError(e=> {
      return throwError(e);
    }),
    map((response) => {
    let rev = response as Acciones[];
    return rev.map(res =>{
      return res;
    });
  }) 
  )  
}

getEventosid(id): Observable<Acciones[]>{
  let fecha1=new Date()
  let fecha2=new Date()
  const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
  const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');
  //return of (USUARIOS);
  return this.http.get<Acciones[]>(this.url+ '/informes/id/' + fechaf1 + '/' + fechaf2 + '/' +id).pipe(
    catchError(e=> {
      return throwError(e);
    }),
    map((response) => {
    let rev = response as Acciones[];
    return rev.map(res =>{
      return res;
    });
  }) 
  )  
}

}