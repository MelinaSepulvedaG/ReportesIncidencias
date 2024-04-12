import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  constructor(private router:Router){}
  ngOnInit():void{

  }

  cambiarTipo(){
    this.router.navigate(['/TipoUsuario'])
  }

}
