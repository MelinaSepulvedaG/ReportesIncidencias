import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activar-cuenta',
  standalone: true,
  imports: [],
  templateUrl: './activar-cuenta.component.html',
  styleUrl: './activar-cuenta.component.css'
})
export class ActivarCuentaComponent {
  constructor(private router:Router){}
  ngOnInit(): void {
  }

    msgActivado(){
      window.alert('Su cuenta ha sido activada exitosamente');
    }
    cancelarAdmin(){
      this.router.navigate(['/Home-Admin'])
    }
    volver(){
      this.router.navigate(['/Home-Admin'])
    }
}
