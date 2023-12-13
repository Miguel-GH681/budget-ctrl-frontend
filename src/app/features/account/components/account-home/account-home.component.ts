import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Subscription } from 'rxjs';
import { Account } from '../../interfaces/account.interface';
import { ChartConfiguration } from 'chart.js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from 'src/app/shared/form-modal/form-modal.component';
import { FormTemplate } from 'src/app/shared/interfaces/form-modal.interface';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {

  accountSuscriptor? : Subscription;
  accounts : Array<Account> = [];
  expenseChartData? : ChartConfiguration<'pie'>['data'];
  incomeChartData? : ChartConfiguration<'pie'>['data'];
  formObject : Array<FormTemplate> = [];

  constructor( private accountService : AccountService, private modalService : NgbModal ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(){
    this.accountSuscriptor = this.accountService.getAccount().subscribe((result:Array<Account>)=>{
      this.accounts = result;
      console.log( this.accounts );
      this.initChartsData();      
    });
  }

  initChartsData(){
      this.expenseChartData = {
        labels: this.accounts.filter(a => a.classification === 'P').map( t => t.name ),
        datasets: [
          {
            data: this.accounts.filter(a => a.classification === 'P').map( t => t.amount),
            label: 'Series A',
            borderColor: 'black'
          }
        ],
      }

      this.incomeChartData = {
        labels: this.accounts.filter(a => a.classification === 'A').map( t => t.name ),
        datasets: [
          {
            data: this.accounts.filter(a => a.classification === 'A').map( t => t.amount ),
            label: 'Series A',
            borderColor: 'black'
          }
        ],
      }
  }

  openModal(){
    this.initFormObject();
    const modal = this.modalService.open(FormModalComponent, { centered: true });
    modal.componentInstance.formTemplate = this.formObject;
  }

  initFormObject(){
    this.formObject = [{
      name: 'Nombre',
      inputType: 'text',
      inputValue: ''
    },
    {
      name: 'Valor',
      inputType: 'numeric',
      inputValue: ''
    },
    {
      name: 'Clasificación',
      inputType: 'radio',
      inputValue: ''
    }]
  }
}
