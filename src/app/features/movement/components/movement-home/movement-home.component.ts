import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovementService } from '../../services/movement.service';
import { Movement } from '../../interfaces/movement.interface';

@Component({
  selector: 'app-movement-home',
  templateUrl: './movement-home.component.html',
  styleUrls: ['./movement-home.component.css']
})
export class MovementHomeComponent implements OnInit {

  movementSubscriptor? : Subscription;
  movements : Array<Movement> = [];
  tableObject : Array<any> = [];
  titles : Array<string> =  ['Id', 'Nombre', 'Costo', 'Fecha', 'Método pago', 'Cuenta']
  
  constructor( private movementService : MovementService ) { }

  ngOnInit(): void {
    this.getMovements()
  }

  getMovements(){
    this.movementSubscriptor = this.movementService.getMovements().subscribe((result:Array<Movement>)=>{
      this.movements = result;
      console.log( this.movements );
      this.initTableObjet();   
    });
  }

  initTableObjet(){
    let objectConfig = this.movements.map((m, i) =>({
        id: i + 1,
        name: m.name,
        amount: m.amount,
        movement_date: m.movement_date,
        payment_method: m.payment_method,
        account: m.account
    }));

    this.tableObject = objectConfig.map( oc => Object.values(oc));

    console.log(this.tableObject);
  }
}
