import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getAccount() : Observable<Array<Account>>{
    return this.httpClient.get<Array<Account>>( environment.BUDGETCTRLAPI + 'accounts/' );
  }
}
