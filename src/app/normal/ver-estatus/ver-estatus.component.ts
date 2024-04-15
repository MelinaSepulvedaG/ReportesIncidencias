import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-ver-estatus',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './ver-estatus.component.html',
  styleUrl: './ver-estatus.component.css'
})
export class VerEstatusComponent {

  ID_reporte:number=0;
  evidenciasAtendido: any;
  evidenciasURLs: string[] = [];

  mexicanada:boolean=false;

  constructor(private route: ActivatedRoute, private router: Router,private http:HttpClient){}

  ngOnInit(): void {
    this.obtenerID();
    this.consultarEvidencias();
    //this.convertirEvidenciasABase64();
  }



  async obtenerID(){
    this.route.paramMap.subscribe(params => {
      const idReporteParam = params.get('ID_reporte');
      if (idReporteParam !== null) {

        this.ID_reporte = Number(idReporteParam);
        // Swal.fire({
        //   title: "bienn",
        //   text: this.ID_reporte.toString(),
        //   icon: "success"
        // });

      } else {
        Swal.fire({
          title: "Error",
          text: "Error al consultar las evidencias del reporte",
          icon: "error"
        });
      }
    });
  }

   async consultarEvidencias(){
    this.http.get<any>(`http://localhost:8000/reportes/detalle_reporte?id_reporte=${this.ID_reporte}`)
      .subscribe(
        (data) => {
          //console.log("Evidencias de atendido 1:", data.evidencia_atendido.evidencia_1);
          this.evidenciasAtendido = data.evidencia_atendido;
          if(this.evidenciasAtendido=="null"){
            Swal.fire({
              title: "Error",
              text: "Sin evidencias",
              icon: "error"
            });
          }else{
            this.convertirEvidenciasABase64();
          }
        },
        (error) => {
          console.error("Error al obtener las evidencias de atendido:", error);
        }
      );
  }

// Método para convertir las evidencias de base64 a URLs de imágenes
convertirEvidenciasABase64(): void {

  if (this.evidenciasAtendido) {

    for (let i = 1; i <= 3; i++) {

      const evidenciaBase64 = this.evidenciasAtendido[`evidencia_${i}`];
      if (evidenciaBase64) {

        // Agregar la URL de la evidencia decodificada al arreglo de URLs
        this.evidenciasURLs.push( evidenciaBase64);
        console.log("Evidencia "+ i +" "+ evidenciaBase64)
      }
    }
    this.mexicanada=true;
  }
}



  }








