import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../interfaces/account.interface';
import { NewAccount } from '../interfaces/new-account.interface';
import { OptionValue } from 'src/app/shared/interfaces/option-value.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor( private httpClient : HttpClient ) { }

  getAccount() : Observable<Array<Account>>{
    return this.httpClient.get<Array<Account>>( environment.BUDGETCTRLAPI + 'accounts/' );
  }

  getAccountDataToForm() : Observable<Array<OptionValue>>{
    return this.httpClient.get<Array<OptionValue>>( environment.BUDGETCTRLAPI + 'accounts/form' );
  }

  postAccount(account : NewAccount){
    return this.httpClient.post( environment.BUDGETCTRLAPI + 'accounts/', account ).toPromise();
  }
}
