import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ServiciosService } from '../servicios.service';
import { Usuario } from '../Modelos/usuario.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  usuario:Usuario=new Usuario;

  constructor(private sesion:ServiciosService){}

  ngOnInit(): void {
    this.sesion.getUsuario().subscribe(usuario => {
      if (usuario !== null) {
        this.usuario = usuario;
      } else {
        //console.error('El usuario recibido es null.');
      }
    });
  }

}
