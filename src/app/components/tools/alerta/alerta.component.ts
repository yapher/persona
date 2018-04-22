import {Component, ViewEncapsulation, Input} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {AlertType} from '../../../models/alert';



@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
 
export class AlertaComponent {
 @Input()  defaultAlerts: any[] = [];

    constructor() {}
 
 onClosed(dismissedAlert: any): void {
   console.log(dismissedAlert);
  }

}


