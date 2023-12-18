import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionValue } from 'src/app/shared/interfaces/option-value.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor( private httpClient : HttpClient ) { }

  getMethodDataToForm() : Observable<Array<OptionValue>>{
    return this.httpClient.get<Array<OptionValue>>( environment.BUDGETCTRLAPI + 'payment-methods/form' );
  }
}
