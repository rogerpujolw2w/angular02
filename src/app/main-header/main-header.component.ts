import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  fecha:string;

constructor() {
  moment.locale('es');
  this.fecha=moment().format("LLL");
 }



ngOnInit() {
  }

}
