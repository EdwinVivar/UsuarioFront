import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioInterface } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URL: string = 'http://localhost:5203/api/Usuarios/'
  constructor(private httpClient: HttpClient) { }

  getUsuarios(): Observable<UsuarioInterface[]> {
    return this.httpClient.get<UsuarioInterface[]>(this.API_URL).pipe(res=> res);
  }

  createUsuario(usuario:UsuarioInterface){
    return this.httpClient.post(this.API_URL, usuario);
  }

  updateUsuario(usuarioId:number, usuario:UsuarioInterface){
    return this.httpClient.put<UsuarioInterface>(this.API_URL + usuarioId, usuario);
  }
 

}
