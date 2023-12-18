import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movement } from '../interfaces/movement.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NewMovement } from '../interfaces/new-movement.interface';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  constructor( private httpClient : HttpClient ) { }

  getMovements() : Observable<Array<Movement>>{
    return this.httpClient.get<Array<Movement>>( environment.BUDGETCTRLAPI + 'movements/' );
  }

  postMovement(movement : NewMovement){
    return this.httpClient.post( environment.BUDGETCTRLAPI + 'movements/', movement ).toPromise();
  }
}
