import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  //Definimos las variables, para mostrarlas en la tabla.
  alumnoForm!:FormGroup;
  matricula!:string
  nombre!:string
  edad!:string
  correo!:string
  foto!:string
  calif!:string

  constructor(private readonly fb: FormBuilder){
    this.alumnoForm=this.initForm()
  }

  onSubmit():void{
    // console.log('Form ->', this.alumnoForm.value)
    this.obtenerDatos();
  }

  obtenerDatos():void{
    this.matricula = this.alumnoForm.get('matricula')?.value
    this.nombre = this.alumnoForm.get('nombre')?.value
    this.edad = this.alumnoForm.get('edad')?.value
    this.correo = this.alumnoForm.get('correo')?.value
    this.foto = this.alumnoForm.get('foto')?.value
    this.calif = this.alumnoForm.get('calif')?.value
  }

  initForm():FormGroup{
    return this.fb.group({
      // Aquí vamos a definir todos  los campos para el formulario
      matricula:['',[Validators.required,Validators.minLength(5)]],
      nombre:['',[Validators.required,Validators.minLength(3)]],
      edad:['',[Validators.required]],
      correo:['',[Validators.required]],
      foto:[''],
      calif:['',[Validators.required]],
    })
  }
}
