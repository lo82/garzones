import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { AccionesService } from '../api/acciones.service';
import { ServiciosService } from '../api/servicios.service';
import { accion } from '../class/accion';
import { acciones } from '../class/acciones';
import { servicios } from '../class/servicios';
import { DatePipe } from '@angular/common';
import { Clientes } from '../class/clientes';
import { ClienteService } from '../api/cliente.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import {  ViewChild } from '@angular/core';
@Component({
  selector: 'app-chicas',
  templateUrl: './chicas.page.html',
  styleUrls: ['./chicas.page.scss'],
})
export class ChicasPage implements OnInit {
@ViewChild(IonModal) modal: IonModal;

  nombre: string ='';
   datosForm: FormGroup = new FormGroup({
   vSer: new FormControl(''),
   iva: new FormControl(''),
   vChica: new FormControl(''),
   pieza: new FormControl(''),
 });

 datoForm: FormGroup = new FormGroup({
   valorServicio: new FormControl(''),
   valorPrivado: new FormControl(''),
   piezas: new FormControl(''),
 });

 datForm: FormGroup = new FormGroup({
   valorServicios: new FormControl(''),
   valorPrivados: new FormControl(''),
   pie: new FormControl(''),
 });
 trago: any = 2;
 tragos: any = 3;
 tragoss: any = 4;
 estado: string = 'pendiente';
 client:Clientes[]=[];
 tot:any;
 valorServicios:any;
 valorPrivados:any;
 pie:any;
 piezas: any;
 isSubmitted = false;
 isSubmittede = false;
 pieza: any;
 seleccionados: string = '';
 seleccionado:number;
 lista: string[] = ['Tarjeta', 'Efectivo','Transferencia'];
 listaNumeros: number[] = [1, 2, 3, 4, 5, 6]
 valor: string[] = [];
 vBruto: string = '';
 vChica: any;
 vSer: any;
 iva: any;
 resultado: any;
 valorServicio: any;
 valorPrivado: any;
 total: any;
 id: any =1;
 ids:any=0;
 fecha=new Date();
 fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
 fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  constructor(private router: Router, private route: ActivatedRoute,private clientess:ClienteService, private formBuilder: FormBuilder,
    private miDatePipe:DatePipe, private servicio: ServiciosService, private accioness:AccionesService) {
    this.nombre = this.route.snapshot.params['nombre'];
       this.ids = this.route.snapshot.params['id'];
  }

  onSelected() {
      this.lista
    }

    ngOnInit(): void {
      this.datosForm = this.formBuilder.group(
        {
          vSer: [''],
          pieza: ['', Validators.required],
          vChica: [
            '',
            [
              Validators.required

            ]
          ],
          iva: [
            '',

          ],
        },
      );

      this.datoForm = this.formBuilder.group(
        {
          valorServicio: [''],
          valorPrivado: ['', Validators.required],
          piezas:['', Validators.required],
        },
      );

      this.datForm = this.formBuilder.group(
        {
          valorServicios: [''],
          valorPrivados: ['', Validators.required],
          pie:['', Validators.required],
        },
      );
      this.clientess.findAll().subscribe((data) => {
     this.client = data;



   });

    }


    onSubmit(): void {
      this.isSubmitted = true;
      if (!this.datosForm.valid) {
        false
      } else {
        this.resultado = this.vSer + this.vChica + this.iva;


      }
    }

    onSubm(): void {
      this.isSubmitted = true;
      if (!this.datForm.valid) {
        false
      } else {
        this.tot= this.valorServicios + this.valorPrivados + this.pie;


      }
    }





    get f(): { [key: string]: AbstractControl } {
      return this.datosForm.controls;
    }

    get ef(): { [key: string]: AbstractControl } {
      return this.datoForm.controls;
    }

    get fo(): { [key: string]: AbstractControl } {
      return this.datForm.controls;
    }


    onSubmits(): void {
      this.isSubmittede = true;
      if (!this.datoForm.valid) {
        false
      } else {

        this.total = this.valorServicio + this.valorPrivado;
      }
    }


    crearServicio() {

      const data = new servicios();

      data.valor = this.datosForm.value.vSer;
      data.valor_servicio = this.datosForm.value.vChica;
      data.iva = this.datosForm.value.iva;
      data.metodo_pago = 'Tarjeta';
      data.pieza = this.pieza;

      swal.fire({
        title: 'Esta seguro?',
        text: `¿Quiere pagar el servicio ?`,
           heightAuto: false,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, pagar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          this.servicio.postCrearServicios(data).subscribe(res =>


            this.crearAccionesTarjeta(),

          )
          swal.fire({
          title: 'Servicio Pagado!',
          text: `Con exito. valor:${this.resultado} habitación:${this.pieza}`,
          icon: 'info',
          confirmButtonText: 'Ok',
         heightAuto: false
        })
        }

      }

      )
this.router.navigate(['home']);

    }

    crearAccionesTarjeta(){
      if(this.id >= 1){
        for (let i = 0; i < 3; i++) {
          this.id[i];
        }
      }
      const data = new acciones();
       data.servicio = { id: this.id+1};
       data.estado = 'pagado';
       data.total_ganado = this.resultado;
       data.tipo_accion = 'servicio';
       data.estado_de_pago = 'pagado';
       data.usuario = { id:this.ids};
       data.tragos={id:1};
       data.fecha_dia = this.fechaf1;
       data.dia_activo = this.fechaf1;
       this.accioness.postCrearAcciones3(data).subscribe(res => console.log(res),
       error => console.log(error));


   }

   crearServicioEfectivo() {
    if(this.id >= 1){
      for (let i = 0; i < 3; i++) {
        this.id[i];
      }
    }
    const data = new servicios();

    data.valor = this.datoForm.value.valorPrivado;
    data.valor_servicio = this.datoForm.value.valorServicio;
    data.metodo_pago = 'Efectivo';
    data.pieza = this.pieza;

    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere pagar el servicio ?`,
      heightAuto: false,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, pagar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.servicio.postCrearServicios(data).subscribe(res =>


          this.crearAccionesEfectivo(),

        )
        swal.fire({
        title: 'Servicio Pagado!',
        text: `Con exito. valor:${this.total} habitación:${this.piezas}`,
        icon: 'info',
        confirmButtonText: 'Ok',
       heightAuto: false
      })

      }

    }

    )
this.router.navigate(['home']);

  }

  crearAccionesEfectivo(){

      if(this.id >= 0){
        this.id ++
      }


    const data = new acciones();
     data.servicio = { id: this.id};
     data.estado = 'pagado';
     data.total_ganado = this.total;
     data.tipo_accion = 'servicio';
     data.estado_de_pago = 'pagado';
     data.usuario = { id:this.ids};
     data.tragos={id:1};
     data.fecha_dia = this.fechaf1;
     data.dia_activo= this.fechaf1;
     this.accioness.postCrearAcciones3(data).subscribe(res => console.log(res),
     error => console.log(error));


  }



  crearServicioTransferencia() {
    if(this.id >= 1){
      for (let i = 0; i < 3; i++) {
        this.id[i];
      }
    }
    const data = new servicios();

    data.valor = this.datoForm.value.valorPrivados;
    data.valor_servicio = this.datoForm.value.valorServicios;
    data.metodo_pago = 'transferencia';
    data.pieza = this.pie;

    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere pagar el servicio ?`,
      icon: 'warning',
         heightAuto: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, pagar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.servicio.postCrearServicios(data).subscribe(res =>


          this.crearAccionesTransferencia(),

        )
        swal.fire({
        title: 'Servicio Pagado!',
        text: `Con exito. valor:${this.tot} habitación:${this.pie}`,
        icon: 'info',
        confirmButtonText: 'Ok',
       heightAuto: false
      })

      }

    }

    )
this.router.navigate(['home']);

  }

  crearAccionesTransferencia(){

      if(this.id >= 0){
        this.id ++
      }


    const data = new acciones();
     data.servicio = { id: this.id};
     data.estado = 'pagado';
     data.total_ganado = this.tot;
     data.tipo_accion = 'servicio';
     data.estado_de_pago = 'pagado';
     data.usuario = { id:this.ids};
     data.tragos={id:1};
     data.fecha_dia = this.fechaf1;
     data.dia_activo= this.fechaf1;
     this.accioness.postCrearAcciones3(data).subscribe(res => console.log(res),
     error => console.log(error));


  }

  cancel() {
     this.modal.dismiss(null, 'cancel');
   }

   confirm() {
     this.modal.dismiss(null, 'confirm');
   }

   onWillDismiss(event: Event) {
     const ev = event as CustomEvent<OverlayEventDetail<string>>;
     if (ev.detail.role === 'confirm') {
       `Hello, !`;
     }

}

crearAccion20(){
  let data :acciones = new acciones();

  data.estado = this.estado;

  data.tipo_accion = 'trago';
  data.estado_de_pago = 'pendiente';
  data.usuario = { id: this.id };



/*
  if(data.cliente = {id:this.seleccionados}){

    data.cliente = {id:this.seleccionados}
  }else{
    data.cliente = {id:this.ido}

  }

*/





data.cliente= {id:this.seleccionado}


  //data.total_ganado = 8000;
  data.tragos = { id: this.trago };
  /// cambie formato fecha
  data.servicio={id:1};
  data.fecha_dia = this.fechaf1;
  data.comisiones="8000";
  data.fecha_dia = this.fechaf1 + this.fech;
  data.dia_activo= this.fechaf1;
  data.fecha_dia = this.fechaf1 +' H '+ this.fech;
 data.total_ganado= "20000"

  /////
  console.log(data);
  this.accioness.postCrearAcciones3(data).subscribe(res => console.log(res.cliente),
    error => console.log(error));


  this.accioness.filter('registrado');
  swal.fire({
  title: 'Trago a pendiente!',
  text: 'Con exito.',
  icon: 'info',
  confirmButtonText: 'Ok',
 heightAuto: false
})

  this.router.navigate(['chicas','0',this.nombre]);

}

crearAccion30(){
  let data :acciones = new acciones();

  data.estado = this.estado;

  data.tipo_accion = 'trago';
  data.estado_de_pago = 'pendiente';
  data.usuario = { id: this.id };



/*
  if(data.cliente = {id:this.seleccionados}){

    data.cliente = {id:this.seleccionados}
  }else{
    data.cliente = {id:this.ido}

  }

*/





data.cliente= {id:this.seleccionado}


  //data.total_ganado = 8000;
  data.tragos = { id: this.tragos };
  /// cambie formato fecha
  data.servicio={id:1};
  data.fecha_dia = this.fechaf1;
  data.comisiones="8000";
  data.fecha_dia = this.fechaf1 + this.fech;
  data.dia_activo= this.fechaf1;
  data.fecha_dia = this.fechaf1 +' H '+ this.fech;
 data.total_ganado= "30000"

  /////
  console.log(data);
  this.accioness.postCrearAcciones3(data).subscribe(res => console.log(res.cliente),
    error => console.log(error));


  this.accioness.filter('registrado');
  swal.fire({
  title: 'Trago a pendiente!',
  text: 'Con exito.',
  icon: 'info',
  confirmButtonText: 'Ok',
 heightAuto: false
})

  this.router.navigate(['chicas','0',this.nombre]);


}


crearAccion40(){


  let data :acciones = new acciones();

    data.estado = this.estado;

    data.tipo_accion = 'trago';
    data.estado_de_pago = 'pendiente';
    data.usuario = { id: this.id };



/*
    if(data.cliente = {id:this.seleccionados}){

      data.cliente = {id:this.seleccionados}
    }else{
      data.cliente = {id:this.ido}

    }

*/





data.cliente= {id:this.seleccionado}


    //data.total_ganado = 8000;
    data.tragos = { id: this.tragoss };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1;
    data.comisiones="8000";
    data.fecha_dia = this.fechaf1 + this.fech;
    data.dia_activo= this.fechaf1;
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
   data.total_ganado= "40000"

    /////
    console.log(data);
    this.accioness.postCrearAcciones3(data).subscribe(res => console.log(res.cliente),
      error => console.log(error));


    this.accioness.filter('registrado');
    swal.fire({
    title: 'Trago a pendiente!',
    text: 'Con exito.',
    icon: 'info',
    confirmButtonText: 'Ok',
   heightAuto: false
  })

    this.router.navigate(['chicas','0',this.nombre]);

  }


  handleRefresh(event:any) {
     setTimeout(() => {
       // Any calls to load data go here
       event.target.complete();
     }, 2000);
   }
}
