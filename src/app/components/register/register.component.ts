import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  formularioRegistro: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    apellidos: [ '', [ Validators.required, Validators.minLength(3) ] ],
    email: [ '', [ Validators.required, Validators.email ] ],
    telefono: [ '', [ Validators.required, Validators.pattern("^[0-9]{9}$") ] ],
    contrasena: ['', [ Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$") ]]
  });

  usuario: Usuario = {
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    contrasena: ''
  }

  constructor( private fb: FormBuilder, private router: Router, private usuarioService: UsuarioService ) { 
  }

  ngOnInit(): void {
  }

  campoEsInvalido( campo: string ){
    return this.formularioRegistro.controls[campo].errors && this.formularioRegistro.controls[campo].touched;
  }

  get nombreNoValido() {
    return this.formularioRegistro.get('nombre')?.invalid && this.formularioRegistro.get('nombre')?.touched;
  }

  enviar() {
    if (this.formularioRegistro.invalid) {
      this.formularioRegistro.markAllAsTouched();
      return;
    } 
    this.usuarioService.crearUsuario( this.formularioRegistro.value ).subscribe();
    this.router.navigateByUrl('/listado');
  }

  reset() {
    this.formularioRegistro.reset();
  }


}
