import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-usuario-normal',
  standalone: true,
  imports: [],
  templateUrl: './menu-usuario-normal.component.html',
  styleUrl: './menu-usuario-normal.component.css'
})
export class MenuUsuarioNormalComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
//cargar div para hacer el reporte
reportar(){
  this.router.navigate(['/Generar-reporte']); 
}
misReportes():void{
  this.router.navigate(['/Mis-reportes']);
}

cerrar_sesion(){
  
    this.router.navigate(['']);
  
}
}
