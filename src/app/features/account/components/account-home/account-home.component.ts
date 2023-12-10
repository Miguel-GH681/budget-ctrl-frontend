import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Subscription } from 'rxjs';
import { Account } from '../../interfaces/account.interface';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {

  accountSuscriptor? : Subscription;
  accounts : Array<Account> = [];
  expenseChartData! : ChartConfiguration<'pie'>['data'];
  incomeChartData! : ChartConfiguration<'pie'>['data'];


  constructor( private accountService : AccountService ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(){
    this.accountSuscriptor = this.accountService.getAccount().subscribe((result:Array<Account>)=>{
      this.accounts = result;
      console.log( this.accounts );
      this.initCharts();
    });
  }

  initCharts(){
    this.expenseChartData = {
      labels: this.accounts.filter(( n:Account )=> n.classification == 'P').map(( a:Account )=> a.name),
      datasets: [
        {
          data: this.accounts.filter(( n:Account )=> n.classification == 'P').map(( a:Account )=> a.amount),
          label: 'Series A',
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)',
        }
      ],
    }

    this.incomeChartData = {
      labels: this.accounts.filter(( n:Account )=> n.classification == 'A').map(( a:Account )=> a.name),
      datasets: [
        {
          data: this.accounts.filter(( n:Account )=> n.classification == 'A').map(( a:Account )=> a.amount),
          label: 'Series A',
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)',
        }
      ],
    }
  }

  public lineChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public lineChartLegend = false;
}
