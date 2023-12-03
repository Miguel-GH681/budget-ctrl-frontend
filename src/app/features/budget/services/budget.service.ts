import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Budget } from '../interfaces/budget.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getBudgets(): Observable<Array<Budget>>{
    return this.httpClient.get<Array<Budget>>(environment.BUDGETCTRLAPI + 'budgets/');
  }

  getBudget( id : string ): Observable<Budget>{
    return this.httpClient.get<Budget>(environment.BUDGETCTRLAPI + 'budget/' + id);
  }
}
