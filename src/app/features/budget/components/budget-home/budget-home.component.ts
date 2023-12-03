import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../interfaces/budget.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget-home',
  templateUrl: './budget-home.component.html',
  styleUrls: ['./budget-home.component.css']
})
export class BudgetHomeComponent implements OnInit {

  budgets : Array<Budget> = [];
  currentBudget? : Budget;
  budgetSuscriptor? : Subscription;

  constructor( private budgetService : BudgetService ) { }

  ngOnInit(): void {
    this.getBudgets();
  }

  getBudgets(){
    this.budgetSuscriptor = this.budgetService.getBudgets().subscribe((result:Array<Budget>)=>{
      this.budgets = result;
      this.currentBudget = result[0];
      console.log( this.currentBudget );
   });
  }

  ngOnDestroy(){
    this.budgetSuscriptor?.unsubscribe();
  }
}
