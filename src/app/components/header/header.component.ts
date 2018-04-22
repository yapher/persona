import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buscar_producto( termino:string){

     console.log(termino);
    //this.router.navigate( ['buscar', termino ] );

  }

}
