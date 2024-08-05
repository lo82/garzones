import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { horario } from '../class/horario';


@Injectable({
  providedIn: 'root'
})
export class ControlService {
  

/*postCrear(data: Control) {
    return this.http
      .post<Control>(
        this.url,
        data
      ).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }
*/

}