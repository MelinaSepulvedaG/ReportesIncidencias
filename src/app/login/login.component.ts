import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { ServiciosService } from '../servicios.service';
import { Usuario } from '../Modelos/usuario.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient, private sesion:ServiciosService) { }
  ngOnInit(): void {
  }

  private apiUrl = 'http://localhost:8000/usuarios/login';
  matricula:string='';
  passwd:string='';
  usuario: Usuario = new Usuario;


  login(){
    const url = `${this.apiUrl}?usuario=${this.matricula}&password=${this.passwd}`;
    this.http.get<any>(url).subscribe(
      response => {
        this.usuario=response.usuario;
        this.sesion.setUsuario(this.usuario);
        console.log(this.usuario);

        if(this.usuario.tipoUser === "SuperAdmin"){
          this.router.navigate(['/Home-Admin']);
        }else if(this.usuario.tipoUser==="Responsable"){
          this.router.navigate(['/Home-Responsable']);
        }else if(this.usuario.tipoUser==="Estudiante"){
          this.router.navigate(['/Home']);
        }
      },
      error => {

        console.error(error);
      }
    );
  }








  ventanaRegistro(): void {
    this.router.navigate(['/Registro-usuarios']);
  }
  loginNormal():void{
    this.router.navigate(['/Home']);
  }
  loginAdmin():void{
    this.router.navigate(['/Home-Admin']);
  }
  loginReponsable():void{

  }
}
