
import { Clientes } from "./clientes";
import { servicios } from "./servicios";
import { trago } from "./trago";


export class acciones {
  id: number;
  caja:number;
  fecha_dia: any= null;
  dia_activo:any =null;
  total_ganado: any = null;
  tipo_accion: string = '';
  estado_de_pago: string='';
  adelanto: string;
  bonificacion: string;
  comisiones: string;
  estado: any =null;
  fecha_trago:any;
  cantidad:number;
   servicio: {
    id: number;

  };
  cliente:{
    id:number
  };
  tragos: {
    id: number;
  };
  usuario: {
    id: number;

  };
  garzon:{
    id:number;
  }

}
