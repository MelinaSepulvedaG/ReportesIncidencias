import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-generar-reporte',
  standalone: true,
  imports: [],
  templateUrl: './generar-reporte.component.html',
  styleUrl: './generar-reporte.component.css'
})
export class GenerarReporteComponent {

  constructor(private router:Router){}
  ngOnInit(): void {
  }

  guardarReporte(): void{
    window.alert('Reporte guardado con éxito');
  }

  cancelar(){
this.router.navigate(['Home'])
  }

}
