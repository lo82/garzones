import { Clientes } from "./clientes";



export class accion {
  id: any;
  fecha_dia: any = null;
  total_ganado: any = null;
  tipo_accion: string = '';
  estado_de_pago: string = '';
  estado: string='';
  adelanto: string='';
  comisiones: string='';
  fecha_trago:string='';
  cliente: Clientes = new Clientes();

  servicio: {
    id: any;
    detalle_servicio: string;
    estado_servicio: string;
    iva: string;
    metodo_pago: string;
    pieza: string;
    tipo_servicio: string;
    valor: string;
    nombre_servicio:string;
  };
  tragos: {
    id: any;
    estado_trago: string;
    iva: string;
    nombre_trago: string;
    total_ganado: string;
    valor_trago:string;
  };
  usuario: {
    id: any;
    nombre: string;
    tipo: string;

  };
  garzon:{
    id:number;
  };



}
