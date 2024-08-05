

//import { Clientes } from "./clientes";

import { Usuarios } from "./usuarios";



export class Acciones {
    id: number;
    fecha_dia: string;
    fecha_trago: string;
    total_ganado: number;
    tipo_accion: string;
    tipo_pago: string;
    estado_de_pago: string;
    estado: string;
    adelanto: number;
    comisiones: number;
    pendiente: string;
    dia_activo: string;
    bonificacion: number;
    caja: number;
    servicio: Servicio;
    usuario: Usuarios;
    tragos: Trago;
    cliente:Clientes;
  }

  export class Trago{

	id: number;
	nombre_trago: string;
    tipo_trago: string;
    estado_trago: string;
    valor_trago: number;
    iva:number;
    metodo_pago:string;
  }

  export class Servicio {

    id: number;
    detalle_servicio:string;
    estado_Servicio:string;
    iva: number;
    metodo_pago: string;
    nombre_servicio: string;
    pieza: number;
    tipo_servicio:string;
    valor: number;
  }

  export class Total_dia {
    id:number;
    fechadia: string;
    ingreso_caja:number;
    total: number;
    estado:string;

  }

  export class Boxmarcado{
    box=[];
  }

  export class Asistecia_component{
    id:number;
    hora_salida:string;
    hora_entrada:string;
    total_horaextra:string;
    estado:string;
    fecha:Date;
    usuario:Usuarios;
  }

  export class usuario{
    id:number;
    nombre:string;
  }


  export class Clientes{
    id:any;
    nombre_cliente;
  }
