import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EspanolService } from 'src/app/espanol.service';
import { Espanol } from 'src/app/espanol/interfaces/espanol.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  diccionario: Espanol[]= [];

  palabraForm: FormGroup = this.fb.group({
    palabra:['', Validators.required],
    descripcion:['', [Validators.required, Validators.minLength(3)]],
    fechaAlta:['', Validators.required],
    fechaModificacion:['', Validators.required],
    palabrasIngles:[ , Validators.required]
  })

  constructor( private fb: FormBuilder, private espanolS: EspanolService) {}

  
  onSubmit(){
    
    this.espanolS.postPalabra(this.palabraForm.value)
      .subscribe( palabra => console.log(palabra))
    
    this.palabraForm.reset(this.palabraForm)

  }

  ngOnInit(): void {
    this.espanolS.getPalabras()
      .subscribe(palabra => this.diccionario = palabra)
   }

   invalid( field: string){

   }

   getErrorMessage(field: string) {
    if (`this.${field}.hasError('required')`) {
      return 'You must enter a value';
    }

    return `this.${field}.hasError('email')` ? 'Not a valid email' : '';
  }

}
