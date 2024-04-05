import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './registro-usuarios.component.html',
  styleUrl: './registro-usuarios.component.css'
})
export class RegistroUsuariosComponent {

  constructor(private router:Router){}

  cancelar(){
    this.router.navigate(['']);
  }
}
