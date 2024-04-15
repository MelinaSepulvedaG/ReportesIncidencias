import { Routes } from '@angular/router';
import path from 'node:path';

//COMPONENTES NORMAL

import { LoginComponent } from './login/login.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { MenuUsuarioNormalComponent } from './normal/menu-usuario-normal/menu-usuario-normal.component';
import { GenerarReporteComponent } from './normal/generar-reporte/generar-reporte.component';
import { MisReportesComponent } from './normal/mis-reportes/mis-reportes.component';
import { ActivarComponent } from './normal/activar/activar.component';
import { VerEstatusComponent } from './normal/ver-estatus/ver-estatus.component';
//COMPONENTES ADMIN

import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { AsignarComponent } from './admin/asignar/asignar.component';
import { VerReportesComponent } from './admin/ver-reportes/ver-reportes.component';
import { DetallesComponent } from './admin/detalles/detalles.component';
import { ActivarCuentaComponent } from './admin/activar-cuenta/activar-cuenta.component';
import { TipoUsuarioComponent } from './admin/tipo-usuario/tipo-usuario.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';

//COMPONENTES RESPONSABLE
import { RevisarComponent } from './responsables/revisar/revisar.component';
import { AsignadosComponent } from './responsables/asignados/asignados.component';
import { MenuResponsableComponent } from './responsables/menu-responsable/menu-responsable.component';

//RUTAS
export const routes: Routes = [
    { path: '',title:"LogIn Page", component:LoginComponent},
    { path: 'Registro-usuarios',title: "Registro", component:RegistroUsuariosComponent},
    { path: 'Home', title: "Página Principal", component:MenuUsuarioNormalComponent},
    { path: 'Generar-reporte', title: "Generar reporte", component:GenerarReporteComponent},
    {path: 'Mis-reportes', title: "Mis Reportes", component:MisReportesComponent},
    {path: 'Activar', title:"Activa tu cuenta", component:ActivarComponent},
    //{path: 'Estatus', title:"Estatus del reporte", component:VerEstatusComponent},
    {path: 'Estatus/:ID_reporte', title:"Estatus del reporte", component:VerEstatusComponent},
   //ADMIN
    {path: 'Asignar', title: "Asignar incidencia", component:AsignarComponent},
    {path: 'Ver-reportes', title: "Reportes de Incidencias", component:VerReportesComponent},
    {path: 'Detalles', title: "Detalles de incidencia", component:DetallesComponent},
    {path: 'Activar', title: "Activacion de cuenta", component:ActivarCuentaComponent},
    {path: 'Home-Admin', title: "Home Administrador", component:MenuAdminComponent},
    {path: 'TipoUsuario',title:"Cambiar tipo de usuario", component:TipoUsuarioComponent},
    {path:'Usuarios', title:"Usuarios", component:UsuariosComponent},
    //RESPONSABLE
    {path: 'Revision',title: "Revision", component:RevisarComponent},
    {path: 'Asignados',title:"Reportes asignados", component:AsignadosComponent},
    {path: 'Home-Responsable', title:"Home Responsable", component:MenuResponsableComponent}

];
