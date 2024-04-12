import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-reportes',
  standalone: true,
  imports: [],
  templateUrl: './mis-reportes.component.html',
  styleUrl: './mis-reportes.component.css'
})
export class MisReportesComponent {
  constructor(private router: Router){}
  ngOnInit(): void {
  }


  misReportes():void{
    this.router.navigate(['/Mis-reportes']);
  }

  verEstatus(){
    this.router.navigate(['/Estatus']);
  }
}
