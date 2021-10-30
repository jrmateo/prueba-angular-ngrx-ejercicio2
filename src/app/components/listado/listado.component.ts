import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe( data => this.usuarios = data );
  }

}
