import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
//dirigir a la ventana de registro
  ventanaRegistro(): void {
    this.router.navigate(['/Registro-usuarios']); 
  }
  login():void{
    this.router.navigate(['/Home']);
  }
}
