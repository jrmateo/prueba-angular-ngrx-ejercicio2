import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  resultado: string = '';


  formularioRegistro: FormGroup = this.fb.group({
    nombre: [ '', Validators.required ],
    apellidos: [ '', Validators.required ],
    email: [ '', [ Validators.required, Validators.email ] ],
    telefono: [ '', [ Validators.required, Validators.pattern("^[0-9]{9}$") ] ],
    contrasena: ['', [ Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$") ]]
  });

  constructor( private fb: FormBuilder, private messageService: MessageService ) { 
  }

  ngOnInit(): void {
  }


  campoEsValido( campo: string ){
    return this.formularioRegistro.controls[campo].errors && this.formularioRegistro.controls[campo].touched;
  }

  get nombreNoValido() {
    return this.formularioRegistro.get('nombre')?.invalid && this.formularioRegistro.get('nombre')?.touched;
  }


  enviar() {
    if (this.formularioRegistro.invalid) {
      this.formularioRegistro.markAllAsTouched();
      this.resultado = "Todos los datos son válidos";
    } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }
  
  reset() {
    //this.formularioRegistro.reset();
  }

}
