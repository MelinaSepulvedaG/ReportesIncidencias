import { Routes } from '@angular/router';
import path from 'node:path';

//COMPONENTES
import { LoginComponent } from './login/login.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { MenuUsuarioNormalComponent } from './menu-usuario-normal/menu-usuario-normal.component';
import { GenerarReporteComponent } from './generar-reporte/generar-reporte.component';
import { MisReportesComponent } from './mis-reportes/mis-reportes.component';


//RUTAS
export const routes: Routes = [
    { path: '',title:"LogIn Page", component:LoginComponent},
    { path: 'Registro-usuarios',title: "Registro", component:RegistroUsuariosComponent},
    { path: 'Home', title: "Página Principal", component:MenuUsuarioNormalComponent},
    { path: 'Generar-reporte', title: "Generar reporte", component:GenerarReporteComponent},
    {path: 'Mis-reportes', title: "Mis Reportes", component:MisReportesComponent}
];
