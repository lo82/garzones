import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccionesService } from '../api/acciones.service';
import { AuthenticationService } from '../api/authentication.service';
import { ClienteService } from '../api/cliente.service';
import { HorarioService } from '../api/horario.service';
import { TokenService } from '../api/token.service';
import { TragosService } from '../api/tragos.service';
import { UsuariossService } from '../api/usuarioss.service';
import { Usuarios } from '../class/usuarios';
import { Boxmarcado, Acciones } from '../class/classA';
import { Subscription } from 'rxjs/internal/Subscription';
import { DatePipe } from '@angular/common';
import { acciones } from '../class/acciones';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { accion } from '../class/accion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  isLogin = false;
  id:number =0;
  authority: string;
  isLogged = false;
  isLoginFail = false;
   roles: string[] = [];
  users: Usuarios[] = [];
  subscription: Subscription= new Subscription();
  recargarHora:number;
  isDisabled: boolean = true;
  checklist: Array<boolean> = [];
  private boxmarcado : Boxmarcado = new Boxmarcado();
   acci : acciones = new acciones();
  acc:Acciones = new Acciones();
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  name!:string;
  accis:accion[]=[];
   constructor(
       private clientess: ClienteService,
       private accioness:AccionesService,
       private miDatePipe: DatePipe,
       private usuario: UsuariossService,
       private authService: AuthenticationService,
       private tokenService: TokenService,
       private router: Router,
       private tragoService: TragosService,
       private cciones: AccionesService,
       private aut: AuthenticationService,
       private route: ActivatedRoute,
       private formBuilder: FormBuilder,
       private cdr: ChangeDetectorRef,
       public renderer: Renderer2,
       private horarios: HorarioService,
       private ngZone: NgZone,
       private elelemtos: ElementRef,
       private alertController: AlertController

     ) {


     }

     ngOnInit() {
     this.name= this.tokenService.getUserName();
       if (this.tokenService.getToken()) {
            this.isLogged = true;
            this.isLoginFail = false;
            this.roles = this.tokenService.getAuthorities();

          }
          this.usuario.findAll().subscribe((data) => {
            this.users = data;
          });

          this.accioness.getUser(this.name).subscribe(data => {
            this.accis=data;
            this.accis.forEach(elemento =>{
              this.id=elemento.id;
              console.log(this.id)
            })
      
          });
      }

      enableDisable() {
         // Enable or disable button conditionally
         if (this.isDisabled == true) {
           this.isDisabled = false;  // Make button enabled
         }

       }

       veinte(){
         let chk=this.elelemtos.nativeElement.querySelectorAll(".chk_sel_box"); let newdata=[];
         chk.forEach(data=>{ if(data['checked']){newdata.push(data['value']);

             this.boxmarcado.box=newdata;
             this.boxmarcado.box.forEach(async element=>{
               //this.acci.tragos.valor_trago= element.valor_trago
               this.acci.estado='pendiente';
             this.acci.usuario = {id:element}
                this.acci.tipo_accion = 'trago';
                this.acci.estado_de_pago = 'pendiente';
                this.acci.total_ganado = 20000;
                this.acci.tragos = {id:2};
                this.acci.garzon ={id:this.id};

                /// cambie formato fecha
               this.acci.servicio={id:1};
               this.acci.fecha_dia = this.fechaf1 +' H '+ this.fech;
                this.acci.comisiones="10000";
                this.accioness.postCrearAcciones3(this.acci).subscribe(res => console.log(res),
                  error => console.log(error));



                  Swal.fire({
                  title: 'trago/os a Pendiente!',
                  text: 'correctamente',
                  icon: 'info',
                  confirmButtonText: 'ok',
                 heightAuto: false
                })

             })



              }

             });



         }

         treinta(){
           let chk=this.elelemtos.nativeElement.querySelectorAll(".chk_sel_box"); let newdata=[];
           chk.forEach(data=>{ if(data['checked']){newdata.push(data['value']);

               this.boxmarcado.box=newdata;
               this.boxmarcado.box.forEach(async element=>{
                 //this.acci.tragos.valor_trago= element.valor_trago
                 this.acci.estado='pendiente';
               this.acci.usuario = {id:element}
                  this.acci.tipo_accion = 'trago';
                  this.acci.estado_de_pago = 'pendiente';
                  this.acci.total_ganado = 30000;
                  this.acci.tragos = {id:3};
                  this.acci.garzon ={id:this.id};
                  /// cambie formato fecha
                 this.acci.servicio={id:1};
                 this.acci.fecha_dia = this.fechaf1 +' H '+ this.fech;
                  this.acci.comisiones="12000";
                  this.accioness.postCrearAcciones3(this.acci).subscribe(res => console.log(res),
                    error => console.log(error));



                    Swal.fire({
                    title: 'trago/os a Pendiente!',
                    text: 'correctamente',
                    icon: 'info',
                    confirmButtonText: 'ok',
                   heightAuto: false
                  })
                 this.accioness.filter('registrado');

               })



                }

               });



           }



           cuarenta(){
             let chk=this.elelemtos.nativeElement.querySelectorAll(".chk_sel_box"); let newdata=[];
             chk.forEach(data=>{ if(data['checked']){newdata.push(data['value']);

                 this.boxmarcado.box=newdata;
                 this.boxmarcado.box.forEach(async element=>{
                   //this.acci.tragos.valor_trago= element.valor_trago
                   this.acci.estado='pendiente';
                 this.acci.usuario = {id:element}
                    this.acci.tipo_accion = 'trago';
                    this.acci.estado_de_pago = 'pendiente';
                    this.acci.total_ganado = 40000;
                    this.acci.tragos = {id:4};
                    /// cambie formato fecha
                   this.acci.servicio={id:1};
                   this.acci.garzon ={id:this.id};
                   this.acci.fecha_dia = this.fechaf1 +' H '+ this.fech;
                    this.acci.comisiones="14000";
                    this.accioness.postCrearAcciones3(this.acci).subscribe(res => console.log(res),
                      error => console.log(error));


                      Swal.fire({
                      title: 'trago/os a Pendiente!',
                      text: 'correctamente',
                      icon: 'info',
                      confirmButtonText: 'ok',
                     heightAuto: false
                    })

                   this.accioness.filter('registrado');



                 })



                  }

                 });



             }


             logOut(): void {
                this.tokenService.logOut();
                this.isLogin = false;
                this.authority = '';
                this.router.navigate(['login']);
              }

              handleRefresh(event:any) {
                 setTimeout(() => {
                   // Any calls to load data go here
                   event.target.complete();
                 }, 2000);
               }


}
