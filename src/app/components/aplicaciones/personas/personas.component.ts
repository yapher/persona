import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { PersonasService } from '../../../services/personas.service';
import {Persona} from '../../../models/persona';
import { PARAMETERS } from '@angular/core/src/util/decorators';



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

  activado: boolean=false;
  defaultAlerts: any[] = [];
  

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.defaultAlerts = [];
    if(this.persona.apellido != '' && this.persona.nombre != '') {
      this.personasService.addPersona(this.persona);
      this.persona.apellido = '';
      this.persona.nombre = '';
      this.persona.documento = 0;
      this.persona.domicilio = '';
    }else{
      //this.activado=true;
      this.defaultAlerts.push({
          type: 'danger',
          msg: 'Falta completar el campo apellido o el campo nombre'
      })
    }
    //this.activado=false;
  }

  desactivarAlerta(){
    this.activado=false;
  }

 
}
