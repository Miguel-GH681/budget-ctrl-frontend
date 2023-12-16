import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Subscription } from 'rxjs';
import { Account } from '../../interfaces/account.interface';
import { ChartConfiguration } from 'chart.js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from 'src/app/shared/form-modal/form-modal.component';
import { FormTemplate } from 'src/app/shared/interfaces/form-modal.interface';
import { NewAccount } from '../../interfaces/new-account.interface';

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
  newAccount : NewAccount = {name:'', amount:0, classification:''};

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

    const modal = this.modalService.open(FormModalComponent, {centered: true});
    modal.componentInstance.formTemplate = this.formObject;
  
    modal.result.then( ( res : Array<FormTemplate>) =>{
        
        this.newAccount.name = res[0].inputValue;
        this.newAccount.amount = res[1].inputValue;
        this.newAccount.classification = res[2].inputValue;
        
        this.accountSuscriptor?.unsubscribe();
        this.accountService.postAccount(this.newAccount).then( resp => {
          this.getAccounts();
        });
    }, error =>{
      console.log(error);
    });
  }

  initFormObject(){
    this.formObject = [{
      name: 'Nombre',
      inputType: 'text',
      inputValue: 'Alimentacion'
    },
    {
      name: 'Valor',
      inputType: 'numeric',
      inputValue: '678'
    },
    {
      name: 'Clasificación',
      inputType: 'text',
      inputValue: ''
    }]
  }

  ngOnDestroy(){
    this.accountSuscriptor?.unsubscribe();
  }
}
