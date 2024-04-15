import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../../servicios.service';

import { Usuario } from '../../Modelos/usuario.model';

@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.css'
})
export class MenuAdminComponent {
  usuario:Usuario=new Usuario;
  constructor(private router:Router, private sesion:ServiciosService){}
  ngOnInit(): void {

    this.sesion.getUsuario().subscribe(usuario => {
      if (usuario !== null) {
        this.usuario = usuario;
      } else {

        console.error('El usuario recibido es null.');
      }
    });
    console.log("Alv si funciona?" + this.usuario.correo);
  }

  verReportes(): void{
    this.router.navigate(['Ver-reportes'])
  }
  cerrar_sesion(){

    this.router.navigate(['']);
}
  activar():void{
    this.router.navigate(['Activar'])
  }
  cambiarTipo(){
    this.router.navigate(['/Usuarios'])
  }

}
