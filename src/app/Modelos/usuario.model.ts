export class Usuario {
  ID_user: number;
  nomUser: string;
  cargo: string;
  correo: string;
  passwd: string;
  tipoUser: string;
  area: string;
  estatus: string | null;
  noCuenta:number;

  constructor(){
    this.ID_user=0;
    this.nomUser="";
    this.cargo="";
    this.correo="";
    this.passwd="";
    this.tipoUser="";
    this.area="";
    this.estatus="";
    this.noCuenta=0;
  }
}
