import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from './Modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private usuarioSubject: BehaviorSubject<Usuario | null> = new BehaviorSubject<Usuario | null>(null); // Inicializa con null o un objeto Usuario
  public usuario$: Observable<Usuario | null> = this.usuarioSubject.asObservable();

  constructor() {}

  setUsuario(usuario: Usuario) {
    this.usuarioSubject.next(usuario);
  }

  getUsuario(): Observable<Usuario | null> {
    return this.usuario$;
  }

}
