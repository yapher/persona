import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { PersonasService } from '../../../services/personas.service';
import {Persona} from '../../../models/persona';



@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class PersonasComponent implements OnInit {

  persona: Persona ={
    apellido: '',
    nombre: '',
    documento: 0,
    domicilio: '' 
  };

  

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.persona.apellido != '' && this.persona.nombre != '') {
      this.personasService.addPersona(this.persona);
      this.persona.apellido = '';
      this.persona.nombre = '';
      this.persona.documento = 0;
      this.persona.domicilio = '';
    }else{
      
    }
  }
}
