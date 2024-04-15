import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ServiciosService } from '../../servicios.service';
import { Usuario } from '../../Modelos/usuario.model';
import { Reporte } from '../../Modelos/reporte.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-reportes',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './mis-reportes.component.html',
  styleUrl: './mis-reportes.component.css'
})
export class MisReportesComponent {
  usuario:Usuario = new Usuario;
  reportes: { [key: number]: Reporte; } | undefined; // Variable para almacenar los reportes recibidos
  constructor(private router: Router, private sesion:ServiciosService, private http:HttpClient){}

  ngOnInit(): void {
    this.sesion.getUsuario().subscribe(usuario => {
      if (usuario !== null) {
        this.usuario = usuario;
      } else {
        console.error('El usuario recibido es null.');
      }
    });

    this.consultarHistorialReportes();

  }

  consultarHistorialReportes() {
    const idUsuario = this.usuario.ID_user;
    const url = `http://localhost:8000/reportes/historial_reportes`; // URL del endpoint


    const params = new HttpParams()
      .set('id_usuario', idUsuario.toString())
      // .set('estatus', 'activo')
      // .set('tipo_report', 'diario')
      // .set('urgencia', 'true');

    // Realizar la solicitud HTTP GET con los parámetros
    this.http.get<{ [key: number]: Reporte }>(url, { params: params }).subscribe(
      (data) => {
        // Manejar la respuesta exitosa y guardar los reportes en la variable
        this.reportes = data;
        console.log("Solicitud exitosa:", this.reportes);
      },
      (error) => {
        // Manejar errores
        console.error("Error en la solicitud:", error);
      }
    );
  }



  misReportes():void{
    this.router.navigate(['/Mis-reportes']);
  }

  verEstatus(ID_report:number){
    //this.router.navigate(['/Estatus']);

    this.router.navigate(['/Estatus', ID_report]);
  }
}
