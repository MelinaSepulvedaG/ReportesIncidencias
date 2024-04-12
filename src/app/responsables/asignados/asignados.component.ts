import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-asignados',
  standalone: true,
  imports: [],
  templateUrl: './asignados.component.html',
  styleUrl: './asignados.component.css'
})
export class AsignadosComponent {
 constructor(private router:Router){}

 ngOnInit():void{

 }
 revision(){
  this.router.navigate(['/Revision']);
 }
}
