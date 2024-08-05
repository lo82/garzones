import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccionesService } from '../api/acciones.service';
import { acciones } from '../class/acciones';
import { AlertController, ToastController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.page.html',
  styleUrls: ['./bar.page.scss'],
})
export class BarPage implements OnInit {
  id:number;
  jhonnyBL:number=1;
  jbl=45;
  jhonnyGr:number=1;
   jhonnyGo:number=1;
   jackGen:number=1;
   jgr=42;
   jgo=43;
     jd=44;
  jackss:number=1;
  jhony:number=1;
  jhno=41;
  chivass:number=1;
  jhonnys:number=1;
  jagers:number=1;
  vodskas:number=1;
  jaa=36;
  chs=37;
  jhs=38;
  jagg=39;
  vood=40;
  jack:number=1;
  chivas:number=1;
  jhonny:number=1;
  jagger:number=1;
  ska:number=1;
  j=36;
  c=37;
  jh=38;
  ja=39;
  v=40;
botellaWR:number=1;
botellaPN:number=1;
botellaR:number=1;
wr=33;
pn=34;
r=35;
  botellaPM:number=1;
  botellaPA:number=1;
  bpm=31;
  bpa=32;
  wiskyDB:number=1;
wdb=28;
  wiskyB:number=1;
 sheridans:number=1;
 wiskB=26;
 she=27;
  kunstman:number=1;
  beylis:number=1
   kun=7;
  cerveza:number=6;
   energeticas:number = 5;
   ener:number=1
   cer:number=1
   bebida:number=1
   vodska:number=1
   nobel:number=1
   jager:number=1
   campary:number=1
tonica:number=1
energetica:number=1
agua:number=1
tonic=9;
ene=10;
mineral=11;
beb=8;
wisky:number=1
cerv:number=1
piscola:number=1
ron:number=1
tequila:number=1
cocktel:number=1
cigarro:number=1
wisk=12;
ce=13;
pis=14;
ro=15;
teq=16;
coc=17;
cig=18;
vod=19;
 wis=20;
 nob=21;
 jag=22;
 cam=23;
 wi=24;
bay=25;
w:number=1
wiskyG:number=1
wiskyGold:number=1
wiskyGen:number=1
wk=29;
vino:number=1
  vin=30;
   constructor(private acciones: AccionesService, private miDatePipe: DatePipe,private route: ActivatedRoute, public router: Router,   private alertController: AlertController,
     private toastCtrl: ToastController,
     ) {
      this.id = this.route.snapshot.params['id'];
      }
   fecha=new Date();
   fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
   fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
   ngOnInit(): void {
   }

    crearCerveza() {
     const data = new acciones();
     data.estado = 'pendiente';


     data.estado_de_pago = 'pendiente';

     //data.total_ganado = 12000;
    data.tragos = { id: this.cerveza };
     /// cambie formato fecha
     data.servicio={id:1};
     data.fecha_dia = this.fechaf1 +' H '+ this.fech;
     data.dia_activo = this.fechaf1;
     data.tipo_accion = 'bar';
     data.total_ganado = 3000 * this.cer;
     data.usuario ={id:4}
      data.garzon ={id:this.id}
      data.cantidad =this.cer;  

     /////
     this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
       error => console.log(error));
       Swal.fire({
       title: `Cerveza ${data.total_ganado}`,
       text: 'a pendiente correctamente',
       icon: 'info',
       confirmButtonText: 'ok',
      heightAuto: false
     })



     this.acciones.filter('registrado');

    this.router.navigate(['home']);


  }
    crearEnergetica() {
     const data = new acciones();
     data.estado = 'pendiente';


     data.estado_de_pago = 'pendiente';

     //data.total_ganado = 12000;
    data.tragos = { id: this.energetica };
     /// cambie formato fecha
     data.servicio={id:1};
     data.fecha_dia = this.fechaf1 +' H '+ this.fech;
     data.tipo_accion = 'bar';
     data.total_ganado = 3000 * this.ener;
     data.usuario ={id:4}
     data.garzon ={id:this.id}
     data.dia_activo = this.fechaf1;
     data.cantidad =this.ener;  
     /////
     this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
       error => console.log(error));
       Swal.fire({
       title: `Energetica ${data.total_ganado}`,
       text: 'a pendiente correctamente',
       icon: 'info',
       confirmButtonText: 'ok',
      heightAuto: false
     })



     this.acciones.filter('registrado');

    this.router.navigate(['home']);
  }

   borrar(){
     this.cer =1;
     this.ener =1;
   }

   crearkunstman() {
       const data = new acciones();
       data.estado = 'pendiente';


       data.estado_de_pago = 'pendiente';


      data.tragos = { id: this.kun };
       /// cambie formato fecha
       data.servicio={id:1};
       data.fecha_dia = this.fechaf1 +' H '+ this.fech;
       data.tipo_accion = 'bar';
       data.total_ganado = 4000 * this.kunstman;
       data.usuario ={id:4}
       data.garzon ={id:this.id}
       data.dia_activo = this.fechaf1;
       data.cantidad =this.kunstman; 

       /////
       this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
         error => console.log(error));
         Swal.fire({
         title: `Kunstman ${data.total_ganado}`,
         text: 'a pendiente correctamente',
         icon: 'info',
         confirmButtonText: 'Cool',
        heightAuto: false
       })



       this.acciones.filter('registrado');

      this.router.navigate(['home']);
    }
     crearBebida() {
         const data = new acciones();
         data.estado = 'pendiente';


         data.estado_de_pago = 'pendiente';


        data.tragos = { id: this.beb };
         /// cambie formato fecha
         data.servicio={id:1};
         data.fecha_dia = this.fechaf1 +' H '+ this.fech;
         data.tipo_accion = 'bar';
         data.total_ganado = 5000 * this.bebida;
         data.usuario ={id:4}
         data.garzon ={id:this.id}
         data.dia_activo = this.fechaf1;
         data.cantidad =this.bebida; 

         /////
         this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
           error => console.log(error));
           Swal.fire({
           title: `Bebida ${data.total_ganado}`,
           text: 'a pendiente correctamente',
           icon: 'info',
           confirmButtonText: 'Cool',
          heightAuto: false
         })



         this.acciones.filter('registrado');

        this.router.navigate(['home']);
      }

       crearTonica() {
         const data = new acciones();
         data.estado = 'pendiente';


         data.estado_de_pago = 'pendiente';


        data.tragos = { id: this.tonic };
         /// cambie formato fecha
         data.servicio={id:1};
         data.fecha_dia = this.fechaf1 +' H '+ this.fech;
         data.tipo_accion = 'bar';
         data.total_ganado = 5000 * this.tonica;
         data.usuario ={id:4}

         data.garzon ={id:this.id}
         data.dia_activo = this.fechaf1;
         data.cantidad =this.tonica; 
         /////
         this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
           error => console.log(error));
           Swal.fire({
           title: `Tonica ${data.total_ganado}`,
           text: 'a pendiente correctamente',
           icon: 'info',
           confirmButtonText: 'Cool',
          heightAuto: false
         })



         this.acciones.filter('registrado');

        this.router.navigate(['home']);
      }

       crearEnergeticas() {
         const data = new acciones();
         data.estado = 'pendiente';


         data.estado_de_pago = 'pendiente';


        data.tragos = { id: this.ene};
         /// cambie formato fecha
         data.servicio={id:1};
         data.fecha_dia = this.fechaf1 +' H '+ this.fech;
         data.tipo_accion = 'bar';
         data.total_ganado = 5000 * this.energeticas;
         data.usuario ={id:4}
         data.garzon ={id:this.id}
         data.dia_activo = this.fechaf1;
         data.cantidad =this.energeticas; 

         /////
         this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
           error => console.log(error));
           Swal.fire({
           title: `Energetica ${data.total_ganado}`,
           text: 'a pendiente correctamente',
           icon: 'info',
           confirmButtonText: 'Cool',
          heightAuto: false
         })



         this.acciones.filter('registrado');

        this.router.navigate(['home']);
      }
       crearMineral() {
         const data = new acciones();
         data.estado = 'pendiente';


         data.estado_de_pago = 'pendiente';


        data.tragos = { id: this.mineral };
         /// cambie formato fecha
         data.servicio={id:1};
         data.fecha_dia = this.fechaf1 +' H '+ this.fech;
         data.tipo_accion = 'bar';
         data.total_ganado = 5000 * this.agua;
         data.usuario ={id:4}
         data.garzon ={id:this.id}
         data.dia_activo = this.fechaf1;
         data.cantidad =this.agua; 

         /////
         this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
           error => console.log(error));
           Swal.fire({
           title: `Agua Mineral ${data.total_ganado}`,
           text: 'a pendiente correctamente',
           icon: 'info',
           confirmButtonText: 'Cool',
          heightAuto: false
         })



         this.acciones.filter('registrado');

        this.router.navigate(['home']);
      }

       crearWisk() {
           const data = new acciones();
           data.estado = 'pendiente';


           data.estado_de_pago = 'pendiente';


          data.tragos = { id: this.wisk };
           /// cambie formato fecha
           data.servicio={id:1};
           data.fecha_dia = this.fechaf1 +' H '+ this.fech;
           data.tipo_accion = 'bar';
           data.total_ganado = 10000 * this.wisky;
           data.usuario ={id:4}

           data.garzon ={id:this.id}
           data.dia_activo = this.fechaf1;
           data.cantidad =this.wisky; 
           /////
           this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
             error => console.log(error));
             Swal.fire({
             title: `Wisky ${data.total_ganado}`,
             text: 'a pendiente correctamente',
             icon: 'info',
             confirmButtonText: 'Cool',
            heightAuto: false
           })



           this.acciones.filter('registrado');

          this.router.navigate(['home']);
        }

         crearCervezas() {
           const data = new acciones();
           data.estado = 'pendiente';


           data.estado_de_pago = 'pendiente';

           data.garzon ={id:this.id}
          data.tragos = { id: this.ce };
           /// cambie formato fecha
           data.servicio={id:1};
           data.fecha_dia = this.fechaf1 +' H '+ this.fech;
           data.tipo_accion = 'bar';
           data.total_ganado = 10000 * this.cerveza;
           data.usuario ={id:4}

           data.dia_activo = this.fechaf1;
           data.cantidad =this.cerveza; 

           /////
           this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
             error => console.log(error));
             Swal.fire({
             title: `Cerveza ${data.total_ganado}`,
             text: 'a pendiente correctamente',
             icon: 'info',
             confirmButtonText: 'Cool',
            heightAuto: false
           })



           this.acciones.filter('registrado');

          this.router.navigate(['home']);
        }

         crearPiscola() {
           const data = new acciones();
           data.estado = 'pendiente';

           data.garzon ={id:this.id}
           data.estado_de_pago = 'pendiente';


          data.tragos = { id: this.pis };
           /// cambie formato fecha
           data.servicio={id:1};
           data.fecha_dia = this.fechaf1 +' H '+ this.fech;
           data.tipo_accion = 'bar';
           data.total_ganado = 10000 * this.piscola;
           data.usuario ={id:4}
           data.dia_activo = this.fechaf1;
           data.cantidad =this.piscola; 


           /////
           this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
             error => console.log(error));
             Swal.fire({
             title: `Piscola ${data.total_ganado}`,
             text: 'a pendiente correctamente',
             icon: 'info',
             confirmButtonText: 'Cool',
            heightAuto: false
           })



           this.acciones.filter('registrado');

          this.router.navigate(['home']);
        }

         crearRon() {
           const data = new acciones();
           data.estado = 'pendiente';
           data.garzon ={id:this.id}

           data.estado_de_pago = 'pendiente';


          data.tragos = { id: this.ro };
           /// cambie formato fecha
           data.servicio={id:1};
           data.fecha_dia = this.fechaf1 +' H '+ this.fech;
           data.tipo_accion = 'bar';
           data.total_ganado = 10000 * this.ron;
           data.usuario ={id:4}
           data.dia_activo = this.fechaf1;
           data.cantidad =this.ron; 


           /////
           this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
             error => console.log(error));
             Swal.fire({
             title: `Ron ${data.total_ganado}`,
             text: 'a pendiente correctamente',
             icon: 'info',
             confirmButtonText: 'Cool',
            heightAuto: false
           })



           this.acciones.filter('registrado');

          this.router.navigate(['home']);
        }

         crearTequila() {
           const data = new acciones();
           data.estado = 'pendiente';

           data.garzon ={id:this.id}
           data.estado_de_pago = 'pendiente';


          data.tragos = { id: this.teq };
           /// cambie formato fecha
           data.servicio={id:1};
           data.fecha_dia = this.fechaf1 +' H '+ this.fech;
           data.tipo_accion = 'bar';
           data.total_ganado = 10000 * this.tequila;
           data.usuario ={id:4}
           data.dia_activo = this.fechaf1;
           data.cantidad =this.tequila; 


           /////
           this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
             error => console.log(error));
             Swal.fire({
             title: `Tequila ${data.total_ganado}`,
             text: 'a pendiente correctamente',
             icon: 'info',
             confirmButtonText: 'Cool',
            heightAuto: false
           })



           this.acciones.filter('registrado');

          this.router.navigate(['home']);

         }

         crearCocktel() {
           const data = new acciones();
           data.estado = 'pendiente';
           data.garzon ={id:this.id}

           data.estado_de_pago = 'pendiente';


          data.tragos = { id: this.coc };
           /// cambie formato fecha
           data.servicio={id:1};
           data.fecha_dia = this.fechaf1 +' H '+ this.fech;
           data.tipo_accion = 'bar';
           data.total_ganado = 10000 * this.cocktel;
           data.usuario ={id:4}
           data.dia_activo = this.fechaf1;
           data.cantidad =this.cocktel; 


           /////
           this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
             error => console.log(error));
             Swal.fire({
             title: `Cocktel ${data.total_ganado}`,
             text: 'a pendiente correctamente',
             icon: 'info',
             confirmButtonText: 'Cool',
            heightAuto: false
           })



           this.acciones.filter('registrado');

          this.router.navigate(['home']);
        }

         crearCigarro() {
           const data = new acciones();
           data.estado = 'pendiente';
           data.garzon ={id:this.id}

           data.estado_de_pago = 'pendiente';


          data.tragos = { id: this.cig };
           /// cambie formato fecha
           data.servicio={id:1};
           data.fecha_dia = this.fechaf1 +' H '+ this.fech;
           data.tipo_accion = 'bar';
           data.total_ganado = 10000 * this.cigarro;
           data.usuario ={id:4}
           data.dia_activo = this.fechaf1;
           data.cantidad =this.cigarro; 


           /////
           this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
             error => console.log(error));
             Swal.fire({
             title: `Cigarro ${data.total_ganado}`,
             text: 'a pendiente correctamente',
             icon: 'info',
             confirmButtonText: 'Cool',
            heightAuto: false
           })



           this.acciones.filter('registrado');

          this.router.navigate(['home']);
        }

        crearVodska() {
            const data = new acciones();
            data.estado = 'pendiente';
            data.garzon ={id:this.id}

            data.estado_de_pago = 'pendiente';


           data.tragos = { id: this.vod};
            /// cambie formato fecha
            data.servicio={id:1};
            data.fecha_dia = this.fechaf1 +' H '+ this.fech;
            data.tipo_accion = 'bar';
            data.total_ganado = 12000 * this.vodska;
            data.usuario ={id:4}
            data.dia_activo = this.fechaf1;
            data.cantidad =this.vodska; 


            /////
            this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
              error => console.log(error));

              Swal.fire({
              title: `Vodska ${data.total_ganado}`,
              text: 'a pendiente correctamente',
              icon: 'info',
              confirmButtonText: 'Cool',
             heightAuto: false
            })



            this.acciones.filter('registrado');

           this.router.navigate(['home']);

          }


          crearWisky() {
            const data = new acciones();
            data.estado = 'pendiente';


            data.estado_de_pago = 'pendiente';

            data.garzon ={id:this.id}
           data.tragos = { id: this.wis};
            /// cambie formato fecha
            data.servicio={id:1};
            data.fecha_dia = this.fechaf1 +' H '+ this.fech;
            data.tipo_accion = 'bar';
            data.total_ganado = 12000 * this.wisky;
            data.usuario ={id:4}
            data.dia_activo = this.fechaf1;
            data.cantidad =this.wisky; 


            /////
            this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
            error => console.log(error));
            Swal.fire({
            title: `Wisky ${data.total_ganado}`,
            text: 'a pendiente correctamente',
            icon: 'info',
            confirmButtonText: 'ok',
           heightAuto: false
          })



          this.acciones.filter('registrado');

         this.router.navigate(['home']);

          }


          crearNovel() {
            const data = new acciones();
            data.estado = 'pendiente';
            data.garzon ={id:this.id}

            data.estado_de_pago = 'pendiente';


           data.tragos = { id: this.nob};
            /// cambie formato fecha
            data.servicio={id:1};
            data.fecha_dia = this.fechaf1 +' H '+ this.fech;
            data.tipo_accion = 'bar';
            data.total_ganado = 12000 * this.nobel;
            data.usuario ={id:4}

            data.garzon ={id:this.id}
            data.dia_activo = this.fechaf1;
            data.cantidad =this.nobel; 
            /////
            this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
              error => console.log(error));

              Swal.fire({
              title: `Nobel ${data.total_ganado}`,
              text: 'a pendiente correctamente',
              icon: 'info',
              confirmButtonText: 'Cool',
             heightAuto: false
            })



            this.acciones.filter('registrado');

           this.router.navigate(['home']);

          }


          crearJager() {
            const data = new acciones();
            data.estado = 'pendiente';


            data.estado_de_pago = 'pendiente';

            data.garzon ={id:this.id}
           data.tragos = { id: this.jag};
            /// cambie formato fecha
            data.servicio={id:1};
            data.fecha_dia = this.fechaf1 +' H '+ this.fech;
            data.tipo_accion = 'bar';
            data.total_ganado = 12000 * this.jager;
            data.usuario ={id:4}
            data.dia_activo = this.fechaf1;
            data.cantidad =this.jager; 


            /////
            this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
              error => console.log(error));
              Swal.fire({
              title: `Jager ${data.total_ganado}`,
              text: 'a pendiente correctamente',
              icon: 'info',
              confirmButtonText: 'Cool',
             heightAuto: false
            })



            this.acciones.filter('registrado');

           this.router.navigate(['home']);

          }


          crearCampary() {
            const data = new acciones();
            data.estado = 'pendiente';

            data.garzon ={id:this.id}
            data.estado_de_pago = 'pendiente';


           data.tragos = { id: this.cam};
            /// cambie formato fecha
            data.servicio={id:1};
            data.fecha_dia = this.fechaf1 +' H '+ this.fech;
            data.tipo_accion = 'bar';
            data.total_ganado = 12000 * this.campary;
            data.usuario={id:4}
            data.dia_activo = this.fechaf1;
            data.cantidad =this.campary; 


            /////
            this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
              error => console.log(error));
              Swal.fire({
              title: `Campary ${data.total_ganado}`,
              text: 'a pendiente correctamente',
              icon: 'info',
              confirmButtonText: 'Cool',
             heightAuto: false
            })



            this.acciones.filter('registrado');

           this.router.navigate(['home']);
          }

          crearWiskyt() {
    const data = new acciones();
    data.estado = 'pendiente';
    data.garzon ={id:this.id}

    data.estado_de_pago = 'pendiente';


   data.tragos = { id: this.wi };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.tipo_accion = 'bar';
    data.total_ganado = 15000 * this.wisky;
    data.usuario ={id:4}
    data.dia_activo = this.fechaf1;
    data.cantidad =this.wisky; 


    /////
    this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire({
      title: `Wisky ${data.total_ganado}`,
      text: 'a pendiente correctamente',
      icon: 'info',
      confirmButtonText: 'Cool',
     heightAuto: false
    })



    this.acciones.filter('registrado');

   this.router.navigate(['home']);

  }

  crearBaylis() {
    const data = new acciones();
    data.estado = 'pendiente';
    data.garzon ={id:this.id}

    data.estado_de_pago = 'pendiente';


   data.tragos = { id: this.bay };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.tipo_accion = 'bar';
    data.total_ganado = 15000 * this.beylis;
    data.usuario ={id:4}
    data.dia_activo = this.fechaf1;
    data.cantidad =this.beylis; 


    /////
    this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire({
      title: `Baylis ${data.total_ganado}`,
      text: 'a pendiente correctamente',
      icon: 'info',
      confirmButtonText: 'Cool',
     heightAuto: false
    })



    this.acciones.filter('registrado');

   this.router.navigate(['home']);

  }

  crearWiskyB() {
    const data = new acciones();
    data.estado = 'pendiente';


    data.estado_de_pago = 'pendiente';

    data.garzon ={id:this.id}
   data.tragos = { id: this.wiskB };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.tipo_accion = 'bar';
    data.total_ganado = 18000 * this.wiskyB;
    data.usuario ={id:4}
    data.dia_activo = this.fechaf1;
    data.cantidad =this.wiskyB; 


    /////
    this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
      error => console.log(error));

      Swal.fire({
      title: `Botella Wisky ${data.total_ganado}`,
      text: 'a pendiente correctamente',
      icon: 'info',
      confirmButtonText: 'Cool',
     heightAuto: false
    })



    this.acciones.filter('registrado');

   this.router.navigate(['home']);

  }

  crearSheridans() {
    const data = new acciones();
    data.estado = 'pendiente';

    data.garzon ={id:this.id}
    data.estado_de_pago = 'pendiente';


   data.tragos = { id: this.she };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.tipo_accion = 'bar';
    data.total_ganado = 18000 * this.sheridans;
    data.usuario ={id:4}
    data.dia_activo = this.fechaf1;
    data.cantidad =this.sheridans; 


    /////
    this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
      error => console.log(error));

      Swal.fire({
      title: `Sheridans ${data.total_ganado}`,
      text: 'a pendiente correctamente',
      icon: 'info',
      confirmButtonText: 'Cool',
     heightAuto: false
    })



    this.acciones.filter('registrado');

   this.router.navigate(['home']);

  }

  crearWSDB() {
    const data = new acciones();
    data.estado = 'pendiente';
    data.garzon ={id:this.id}

    data.estado_de_pago = 'pendiente';


   data.tragos = { id: this.wdb };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.tipo_accion = 'bar';
    data.total_ganado = 20000 * this.wiskyDB;
    data.usuario ={id:4}
    data.dia_activo = this.fechaf1;
    data.cantidad =this.wiskyDB; 


    /////
    this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
    error => console.log(error));
    Swal.fire({
    title: `Whisky Double Black ${data.total_ganado}`,
    text: 'a pendiente correctamente',
    icon: 'info',
    confirmButtonText: 'Cool',
   heightAuto: false
  })



  this.acciones.filter('registrado');

 this.router.navigate(['home']);

  }

  crearW() {
    const data = new acciones();
    data.estado = 'pendiente';
    data.garzon ={id:this.id}

    data.estado_de_pago = 'pendiente';


   data.tragos = { id: this.w };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.tipo_accion = 'bar';
    data.total_ganado = 30000 * this.wisky;
    data.usuario ={id:4}
    data.dia_activo = this.fechaf1;
    data.cantidad =this.wisky; 


    /////
    this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire({
      title: `Whisky ${data.total_ganado}`,
      text: 'a pendiente correctamente',
      icon: 'info',
      confirmButtonText: 'Cool',
     heightAuto: false
    })



    this.acciones.filter('registrado');

   this.router.navigate(['home']);

  }


  crearWG() {
    const data = new acciones();
    data.estado = 'pendiente';

    data.garzon ={id:this.id}
    data.estado_de_pago = 'pendiente';


   data.tragos = { id: this.w };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.tipo_accion = 'bar';
    data.total_ganado = 30000 * this.wiskyG;
    data.usuario ={id:4}
    data.dia_activo = this.fechaf1;
    data.cantidad =this.wiskyG; 


    /////
    this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire({
      title: `Whisky Green ${data.total_ganado}`,
      text: 'a pendiente correctamente',
      icon: 'info',
      confirmButtonText: 'Cool',
     heightAuto: false
    })



    this.acciones.filter('registrado');

   this.router.navigate(['home']);

  }

  crearWGOLD() {
    const data = new acciones();
    data.estado = 'pendiente';

    data.garzon ={id:this.id}
    data.estado_de_pago = 'pendiente';


   data.tragos = { id: this.w };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.tipo_accion = 'bar';
    data.total_ganado = 30000 * this.wiskyGold;
    data.usuario ={id:4}
    data.dia_activo = this.fechaf1;
    data.cantidad =this.wiskyGold; 


    /////
    this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
      error => console.log(error));

      Swal.fire({
      title: `Whisky Gold ${data.total_ganado}`,
      text: 'a pendiente correctamente',
      icon: 'info',
      confirmButtonText: 'Cool',
     heightAuto: false
    })



    this.acciones.filter('registrado');

   this.router.navigate(['home']);

  }



  crearWGGentleman() {
    const data = new acciones();
    data.estado = 'pendiente';

    data.garzon ={id:this.id}
    data.estado_de_pago = 'pendiente';


   data.tragos = { id: this.w };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.tipo_accion = 'bar';
    data.total_ganado = 30000 * this.wiskyGen;
    data.usuario ={id:4}
    data.dia_activo = this.fechaf1;
    data.cantidad =this.wiskyGen; 


    /////
    this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire({
      title: `Whisky Gentleman Jack ${data.total_ganado}`,
      text: 'a pendiente correctamente',
      icon: 'info',
      confirmButtonText: 'Cool',
     heightAuto: false
    })



    this.acciones.filter('registrado');

   this.router.navigate(['home']);

  }

  crearVino() {
      const data = new acciones();
      data.estado = 'pendiente';
      data.garzon ={id:this.id}

      data.estado_de_pago = 'pendiente';


     data.tragos = { id: this.vin };
      /// cambie formato fecha
      data.servicio={id:1};
      data.fecha_dia = this.fechaf1 +' H '+ this.fech;
      data.tipo_accion = 'bar';
      data.total_ganado = 50000 * this.vino;
      data.usuario ={id:4}
      data.dia_activo = this.fechaf1;
      data.cantidad =this.vino; 


      /////
      this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
        error => console.log(error));

        Swal.fire({
        title: `Vino ${data.total_ganado}`,
        text: 'a pendiente correctamente',
        icon: 'info',
        confirmButtonText: 'ok',
       heightAuto: false
      })



      this.acciones.filter('registrado');

     this.router.navigate(['home']);

    }


      crearBotellaM() {
        const data = new acciones();
        data.estado = 'pendiente';
        data.garzon ={id:this.id}

        data.estado_de_pago = 'pendiente';


       data.tragos = { id: this.bpm };
        /// cambie formato fecha
        data.servicio={id:1};
        data.fecha_dia = this.fechaf1 +' H '+ this.fech;
        data.tipo_accion = 'bar';
        data.total_ganado = 60000 * this.botellaPM;
        data.usuario ={id:4}
        data.dia_activo = this.fechaf1;
        data.cantidad =this.botellaPM; 


        /////
        this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
          error => console.log(error));

          Swal.fire({
          title: `Botella Pisco Mistral ${data.total_ganado}`,
          text: 'a pendiente correctamente',
          icon: 'info',
          confirmButtonText: 'Cool',
         heightAuto: false
        })



        this.acciones.filter('registrado');

       this.router.navigate(['home']);;

      }

      crearBotellaA() {
        const data = new acciones();
        data.estado = 'pendiente';
        data.garzon ={id:this.id}

        data.estado_de_pago = 'pendiente';


       data.tragos = { id: this.bpa };
        /// cambie formato fecha
        data.servicio={id:1};
        data.fecha_dia = this.fechaf1 +' H '+ this.fech;
        data.tipo_accion = 'bar';
        data.total_ganado = 60000 * this.botellaPA;
        data.usuario ={id:4}
        data.dia_activo = this.fechaf1;
        data.cantidad =this.botellaPA; 


        /////
        this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
          error => console.log(error));
          Swal.fire({
          title: `Botella Pisco Alto Del Carmen ${data.total_ganado}`,
          text: 'a pendiente correctamente',
          icon: 'info',
          confirmButtonText: 'Cool',
         heightAuto: false
        })



        this.acciones.filter('registrado');

       this.router.navigate(['home']);
      }

      crearBotellaWR() {
         const data = new acciones();
         data.estado = 'pendiente';
         data.garzon ={id:this.id}

         data.estado_de_pago = 'pendiente';


        data.tragos = { id: this.wr };
         /// cambie formato fecha
         data.servicio={id:1};
         data.fecha_dia = this.fechaf1 +' H '+ this.fech;
         data.tipo_accion = 'bar';
         data.total_ganado = 80000 * this.botellaWR;
         data.usuario ={id:4}
         data.dia_activo = this.fechaf1;
         data.cantidad =this.botellaWR; 


         /////
         this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
           error => console.log(error));
           Swal.fire({
           title: `Botella Whisky Rojo ${data.total_ganado}`,
           text: 'a pendiente correctamente',
           icon: 'info',
           confirmButtonText: 'Cool',
          heightAuto: false
         })



         this.acciones.filter('registrado');

        this.router.navigate(['home']);
       }

       crearBotellaPN() {
         const data = new acciones();
         data.estado = 'pendiente';
         data.garzon ={id:this.id}

         data.estado_de_pago = 'pendiente';


        data.tragos = { id: this.pn };
         /// cambie formato fecha
         data.servicio={id:1};
         data.fecha_dia = this.fechaf1 +' H '+ this.fech;
         data.tipo_accion = 'bar';
         data.total_ganado = 80000 * this.botellaPN;
         data.usuario ={id:4}
         data.dia_activo = this.fechaf1;
         data.cantidad =this.botellaPN; 


         /////
         this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
           error => console.log(error));

           Swal.fire({
           title: `Botella Pisco Nobel ${data.total_ganado}`,
           text: 'a pendiente correctamente',
           icon: 'info',
           confirmButtonText: 'Cool',
          heightAuto: false
         })



         this.acciones.filter('registrado');

        this.router.navigate(['home']);
       }

       crearBotellaR() {
         const data = new acciones();
         data.estado = 'pendiente';
         data.garzon ={id:this.id}

         data.estado_de_pago = 'pendiente';


        data.tragos = { id: this.r };
         /// cambie formato fecha
         data.servicio={id:1};
         data.fecha_dia = this.fechaf1 +' H '+ this.fech;
         data.tipo_accion = 'bar';
         data.total_ganado = 80000 * this.botellaR;
         data.usuario ={id:4}
         data.dia_activo = this.fechaf1;
         data.cantidad =this.botellaR; 


         /////
         this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
           error => console.log(error));
           Swal.fire({
           title: `Botella Ron ${data.total_ganado}`,
           text: 'a pendiente correctamente',
           icon: 'info',
           confirmButtonText: 'Cool',
          heightAuto: false
         })



         this.acciones.filter('registrado');

        this.router.navigate(['home']);
       }

       crearBotellaJa() {
          const data = new acciones();
          data.estado = 'pendiente';
          data.garzon ={id:this.id}

          data.estado_de_pago = 'pendiente';


         data.tragos = { id: this.jaa};
          /// cambie formato fecha
          data.servicio={id:1};
          data.fecha_dia = this.fechaf1 +' H '+ this.fech;
          data.tipo_accion = 'bar';
          data.total_ganado = 120000 * this.jackss;
          data.usuario ={id:4}
          data.dia_activo = this.fechaf1;
          data.cantidad =this.jackss; 


          /////
          this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
            error => console.log(error));

            Swal.fire({
            title: `Botella Jack Daniels ${data.total_ganado}`,
            text: 'a pendiente correctamente',
            icon: 'info',
            confirmButtonText: 'Cool',
           heightAuto: false
          })



          this.acciones.filter('registrado');

         this.router.navigate(['home']);

        }

        crearBotellaChivas() {
          const data = new acciones();
          data.estado = 'pendiente';
          data.garzon ={id:this.id}

          data.estado_de_pago = 'pendiente';


         data.tragos = { id: this.chs };
          /// cambie formato fecha
          data.servicio={id:1};
          data.fecha_dia = this.fechaf1 +' H '+ this.fech;
          data.tipo_accion = 'bar';
          data.total_ganado = 120000 * this.chivass;
          data.usuario ={id:4}
          data.dia_activo = this.fechaf1;
          data.cantidad =this.chivass; 


          /////
          this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
            error => console.log(error));
            Swal.fire({
            title: `Botella Chivas Regal ${data.total_ganado}`,
            text: 'a pendiente correctamente',
            icon: 'info',
            confirmButtonText: 'Cool',
           heightAuto: false
          })



          this.acciones.filter('registrado');

         this.router.navigate(['home']);
        }

        crearBotellaJhonny() {
          const data = new acciones();
          data.estado = 'pendiente';
          data.garzon ={id:this.id}

          data.estado_de_pago = 'pendiente';


         data.tragos = { id: this.jhs };
          /// cambie formato fecha
          data.servicio={id:1};
          data.fecha_dia = this.fechaf1 +' H '+ this.fech;
          data.tipo_accion = 'bar';
          data.total_ganado = 120000 * this.jhonnys;
          data.usuario ={id:4}
          data.dia_activo = this.fechaf1;
          data.cantidad =this.jhonnys; 


          /////
          this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
            error => console.log(error));
            Swal.fire({
            title: `Botella Jhonny ${data.total_ganado}`,
            text: 'a pendiente correctamente',
            icon: 'info',
            confirmButtonText: 'Cool',
           heightAuto: false
          })



          this.acciones.filter('registrado');

         this.router.navigate(['home']);

        }

        crearBotellaJager() {
          const data = new acciones();
          data.estado = 'pendiente';


          data.estado_de_pago = 'pendiente';

          data.garzon ={id:this.id}
         data.tragos = { id: this.jagg};
          /// cambie formato fecha
          data.servicio={id:1};
          data.fecha_dia = this.fechaf1 +' H '+ this.fech;
          data.tipo_accion = 'bar';
          data.total_ganado = 120000 * this.jagers;
          data.usuario ={id:4}
          data.dia_activo = this.fechaf1;
          data.cantidad =this.jagers; 


          /////
          this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
            error => console.log(error));
            Swal.fire({
            title: `Botella Jager ${data.total_ganado}`,
            text: 'a pendiente correctamente',
            icon: 'info',
            confirmButtonText: 'Cool',
           heightAuto: false
          })



          this.acciones.filter('registrado');

         this.router.navigate(['home']);
        }

        crearBotellaVodska() {
          const data = new acciones();
          data.estado = 'pendiente';


          data.estado_de_pago = 'pendiente';
          data.garzon ={id:this.id}

         data.tragos = { id: this.vood };
          /// cambie formato fecha
          data.servicio={id:1};
          data.fecha_dia = this.fechaf1 +' H '+ this.fech;
          data.tipo_accion = 'bar';
          data.total_ganado = 120000 * this.vodskas;
          data.usuario ={id:4}
          data.dia_activo = this.fechaf1;
          data.cantidad =this.vodskas; 


          /////
          this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
            error => console.log(error));
            Swal.fire({
            title: `Botella Vodska ${data.total_ganado}`,
            text: 'a pendiente correctamente',
            icon: 'info',
            confirmButtonText: 'Cool',
           heightAuto: false
          })



          this.acciones.filter('registrado');

         this.router.navigate(['home']);
        }

        crearBotellaJhony() {
           const data = new acciones();
           data.estado = 'pendiente';
           data.garzon ={id:this.id}

           data.estado_de_pago = 'pendiente';


          data.tragos = { id: this.jhno};
           /// cambie formato fecha
           data.servicio={id:1};
           data.fecha_dia = this.fechaf1 +' H '+ this.fech;
           data.tipo_accion = 'bar';
           data.total_ganado = 150000 * this.jhony;
           data.usuario ={id:4}
           data.dia_activo = this.fechaf1;
           data.cantidad =this.jhony; 


           /////
           this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
             error => console.log(error));

             Swal.fire({
             title: `Botella Jhonny Waker Double Black  ${data.total_ganado}`,
             text: 'a pendiente correctamente',
             icon: 'info',
             confirmButtonText: 'Cool',
            heightAuto: false
           })



           this.acciones.filter('registrado');

          this.router.navigate(['home']);
         }

         crearJhonnyGreen() {
             const data = new acciones();
             data.estado = 'pendiente';
             data.garzon ={id:this.id}

             data.estado_de_pago = 'pendiente';


            data.tragos = { id: this.jgr};
             /// cambie formato fecha
             data.servicio={id:1};
             data.fecha_dia = this.fechaf1 +' H '+ this.fech;
             data.tipo_accion = 'bar';
             data.total_ganado = 180000 * this.jhonnyGr;
             data.usuario ={id:4}
             data.dia_activo = this.fechaf1;
             data.cantidad =this.jhonnyGr; 


             /////
             this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
               error => console.log(error));
               Swal.fire({
               title: `Jhonny Green Label  ${data.total_ganado}`,
               text: 'a pendiente correctamente',
               icon: 'info',
               confirmButtonText: 'Cool',
              heightAuto: false
             })



             this.acciones.filter('registrado');

            this.router.navigate(['home']);

           }

           crearJhonnyGolden() {
             const data = new acciones();
             data.estado = 'pendiente';
             data.garzon ={id:this.id}

             data.estado_de_pago = 'pendiente';


            data.tragos = { id: this.jgo};
             /// cambie formato fecha
             data.servicio={id:1};
             data.fecha_dia = this.fechaf1 +' H '+ this.fech;
             data.tipo_accion = 'bar';
             data.total_ganado = 180000 * this.jhonnyGo;
             data.usuario ={id:4}
             data.dia_activo = this.fechaf1;
             data.cantidad =this.jhonnyGo; 


             /////
             this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
               error => console.log(error));
               Swal.fire({
               title: `Jhonny Golden Label  ${data.total_ganado}`,
               text: 'a pendiente correctamente',
               icon: 'info',
               confirmButtonText: 'Cool',
              heightAuto: false
             })



             this.acciones.filter('registrado');

            this.router.navigate(['home']);
           }


           crearJackGen() {
             const data = new acciones();
             data.estado = 'pendiente';


             data.estado_de_pago = 'pendiente';
             data.garzon ={id:this.id}

            data.tragos = { id: this.jd};
             /// cambie formato fecha
             data.servicio={id:1};
             data.fecha_dia = this.fechaf1 +' H '+ this.fech;
             data.tipo_accion = 'bar';
             data.total_ganado = 180000 * this.jackGen;
             data.usuario ={id:4}

             data.dia_activo = this.fechaf1;
             data.cantidad =this.jackGen; 

             /////
             this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
               error => console.log(error));
               Swal.fire({
               title: `Jack Daniels Gentleman Jack  ${data.total_ganado}`,
               text: 'a pendiente correctamente',
               icon: 'info',
               confirmButtonText: 'Cool',
              heightAuto: false
             })



             this.acciones.filter('registrado');

            this.router.navigate(['home']);
           }

           crearJhonnyL() {
              const data = new acciones();
              data.estado = 'pendiente';
              data.garzon ={id:this.id}

              data.estado_de_pago = 'pendiente';


             data.tragos = { id: this.jbl};
              /// cambie formato fecha
              data.servicio={id:1};
              data.fecha_dia = this.fechaf1 +' H '+ this.fech;
              data.tipo_accion = 'bar';
              data.total_ganado = 800000 * this.jhonnyBL;
              data.usuario ={id:4}
              data.dia_activo = this.fechaf1;
              data.cantidad =this.jhonnyBL; 


              /////
              this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
                error => console.log(error));
                Swal.fire({
                title: `Jhonny Waker Blue Label Daniels Gentleman Jack  ${data.total_ganado}`,
                text: 'a pendiente correctamente',
                icon: 'info',
                confirmButtonText: 'Cool',
               heightAuto: false
              })



              this.acciones.filter('registrado');

             this.router.navigate(['home']);
            }

            handleRefresh(event:any) {
               setTimeout(() => {
                 // Any calls to load data go here
                 event.target.complete();
               }, 2000);
             }


  }
