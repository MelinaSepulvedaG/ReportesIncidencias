import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-ver-reportes',
  standalone: true,
  imports: [],
  templateUrl: './ver-reportes.component.html',
  styleUrl: './ver-reportes.component.css'
})
export class VerReportesComponent {
constructor(private router:Router){}

ngOnInit():void{

}

detalles(){
  this.router.navigate(['/Detalles'])
}
volver(){
  this.router.navigate(['/Home-Admin'])
}
}
