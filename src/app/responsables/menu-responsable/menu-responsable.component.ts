import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-responsable',
  standalone: true,
  imports: [],
  templateUrl: './menu-responsable.component.html',
  styleUrl: './menu-responsable.component.css'
})
export class MenuResponsableComponent {
constructor(private router:Router){}
 ngOnInit():void{

 }

 cerrarSesion(){
  this.router.navigate(['']);
 }
 
 verAsignados(){
  this.router.navigate(['/Asignados']);
 }

}
