import { Component, Input, OnInit } from '@angular/core';
import { Movement } from '../../interfaces/movement.interface';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {

  @Input() titles : Array<string> = ['No.', 'Nombre', 'Cantidad', 'Fecha']
  @Input() movements : Array<Movement> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
