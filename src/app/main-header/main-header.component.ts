import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  fecha:string;
  disBoton1:boolean = false;
  disBoton2:boolean = true;
  disBoton3:boolean = true;
  clase: string = "btn btn-primary";
  clase2: string = "btn btn-primary";
  clase3: string = "btn btn-primary";
  txtBtn: string = "Botón verde";
  txtBtn2: string = "Botón azul";
  txtBtn3: string = "Botón rojo";
  bgButton: string = "red";

  items:Array<string> = ['pepe','juan'];

clickAzul() {
  alert('Has pulsado el botón');
}

clickVerde() {
  this.disBoton1 = true;
  this.disBoton2 = false;
  this.disBoton3 = false;
}

clickRojo() {
  this.disBoton1 = false;
  this.disBoton2 = true;
  this.disBoton3 = true;
}

constructor() {
  moment.locale('es');
  this.fecha = moment().format("LLL");


 }



ngOnInit() {
  }

}
