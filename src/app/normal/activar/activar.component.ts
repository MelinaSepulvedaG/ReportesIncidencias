import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activar',
  standalone: true,
  imports: [],
  templateUrl: './activar.component.html',
  styleUrl: './activar.component.css'
})
export class ActivarComponent {
constructor(private router:Router){}

ngOnInit():void{

}

msgActivado(){
  window.alert('Su cuenta ha sido activada exitosamente');
}
cancelar(){
  this.router.navigate(['/Home'])
}
}
