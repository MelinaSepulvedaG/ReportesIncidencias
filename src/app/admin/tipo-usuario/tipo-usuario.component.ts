import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-usuario',
  standalone: true,
  imports: [],
  templateUrl: './tipo-usuario.component.html',
  styleUrl: './tipo-usuario.component.css'
})
export class TipoUsuarioComponent {
  constructor(private router:Router){}
  ngOnInit():void{

  }

  cambiarTipo(){
    this.router.navigate(['/TipoUsuario'])
  }

  cancelar(){
    this.router.navigate(['/Usuarios']);
  }

}
