import { ServiciosService } from './../../servicios.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

import { Usuario } from '../../Modelos/usuario.model';


@Component({
  selector: 'app-generar-reporte',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './generar-reporte.component.html',
  styleUrl: './generar-reporte.component.css'
})
export class GenerarReporteComponent {

  constructor(private router:Router, private http:HttpClient, private sesion:ServiciosService){}

  usuario:Usuario = new Usuario;
  ngOnInit(): void {
    this.sesion.getUsuario().subscribe(usuario => {
      if (usuario !== null) {
        this.usuario = usuario;
      } else {

        console.error('El usuario recibido es null.');
      }
    });
  }



  cancelar(){
    this.router.navigate(['Home'])
  }

  evidenciaSeleccionada: FileList | undefined;
  maxCantidadImagenes: number = 3;

  onFileChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length <= this.maxCantidadImagenes) {
      this.evidenciaSeleccionada = files;
    } else {

      Swal.fire({
        title: "Muchas Imagenes",
        text: "solo puedes cargar 3 imagenes como evidencia",
        icon: "error"
      });

      //alert(`Solo se pueden cargar hasta ${this.maxCantidadImagenes} imágenes.`);
    }
  }

  // Función para crear una URL de objeto para un archivo
  createObjectURL(file: File): string {
    if (window.URL) {
      return window.URL.createObjectURL(file);
    } else if (window.webkitURL) {
      return window.webkitURL.createObjectURL(file);
    } else {
      return '';
    }
  }

  getFilesArray(fileList: FileList): File[] {
    const filesArray: File[] = [];
    for (let i = 0; i < fileList.length; i++) {
      filesArray.push(fileList[i]);
    }
    return filesArray;
  }

  guardarReporte(nomReporte: string, descripcion: string, evidencias: FileList | undefined, tipoReporte: string): void {
    if (!evidencias || evidencias.length == 0) {
      Swal.fire({
        title: "Sin imagenes",
        text: "Por favor carga al menos una evidencia",
        icon: "error"
      });
      return; // Salir del método si no hay evidencias
    }

    // Convertir las imágenes a base64
    const evidenciasBase64: string[] = [];
    for (let i = 0; i < evidencias.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        evidenciasBase64.push(base64);
        if (evidenciasBase64.length === evidencias.length) {
          // Cuando todas las imágenes se han convertido, enviar el reporte
          this.enviarReporte(nomReporte, descripcion, evidenciasBase64, tipoReporte);
        }
      };
      reader.readAsDataURL(evidencias[i]);
    }
  }

  enviarReporte(nomReporte: string, descripcion: string, evidenciasBase64: string[], tipoReporte: string): void {
    const reporte = {
      nom_reporte: nomReporte,
      descripcion: descripcion,
      evidencia_1: evidenciasBase64[0] || '',
      evidencia_2: evidenciasBase64[1] || '',
      evidencia_3: evidenciasBase64[2] || '',
      autor: this.usuario.ID_user,
      estatus: "Pendiente",
      urgencia: 1,
      privacidad: 0,
      tipo_reporte: tipoReporte,
      responsable: 0
    };

    this.http.post<any>('http://localhost:8000/reportes/registrar_reporte', reporte)
      .subscribe(response => {
        console.log('Reporte enviado correctamente:', response);
        Swal.fire({
          title: "Reporte enviado",
          text: "",
          icon: "success"
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['Home']);
          }
        });
        //this.router.navigate(['Home']);
      }, error => {
        console.error('Error al enviar el reporte:', error);
        Swal.fire({
          title: "Error",
          text: "Error al enviar el reporte, Verifique sus datos",
          icon: "error"
        });
      });
  }

}
