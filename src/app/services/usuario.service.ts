import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../model/usuario';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${ this.baseUrl }/Usuarios`);
  }

  getUsuarioPorId( id: string ):Observable<Usuario> {
    return this.http.get<Usuario>(`${ this.baseUrl }/Usuarios/${ id }`);
  }

  crearUsuario( usuario: Usuario ): Observable<Usuario> {
    return this.http.post<Usuario>(`${ this.baseUrl }/Usuarios`, usuario );
  }

}
