import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.css'
})
export class MenuAdminComponent {
  constructor(private router:Router){}
  ngOnInit(): void {
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
