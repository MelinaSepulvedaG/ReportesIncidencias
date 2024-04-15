export class Reporte {
[x: string]: any;
  [key: number]: {
    ID_report: number;
    nomReport: string;
    fecha_report: string;
    estatus: string;
    autor: {
      ID_user: number;
      nomUser: string;
      noCuenta: string;
    };
    tipo_report: string;
    urgencia: number;
  };
}
