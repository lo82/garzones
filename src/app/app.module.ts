import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCustomDateParserFormatter } from './api/ngb-custom-date-parser-formatter';
import { DatePipe } from '@angular/common';
import { BasicAuthInterceptorServiceService } from './api/basic-auth-interceptor-service.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, NgbModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptorServiceService, multi: true },{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{provide: NgbDateParserFormatter,
    useValue: new NgbCustomDateParserFormatter("DD-MM-YYYY")},DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
