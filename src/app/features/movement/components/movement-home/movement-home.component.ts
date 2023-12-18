import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovementService } from '../../services/movement.service';
import { Movement } from '../../interfaces/movement.interface';
import { FormTemplate } from 'src/app/shared/interfaces/form-modal.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from 'src/app/shared/form-modal/form-modal.component';
import { AccountService } from 'src/app/features/account/services/account.service';
import { OptionValue } from 'src/app/shared/interfaces/option-value.interface';
import { BankService } from 'src/app/features/bank/services/bank.service';
import { NewMovement } from '../../interfaces/new-movement.interface';

@Component({
  selector: 'app-movement-home',
  templateUrl: './movement-home.component.html',
  styleUrls: ['./movement-home.component.css']
})
export class MovementHomeComponent implements OnInit {

  movementSubscriptor? : Subscription;
  accountSubscriptor? : Subscription;
  bankSubscriptor? : Subscription;
  movements : Array<Movement> = [];
  newMovement : NewMovement = {movement_id:'', name:'', movement_date:'', observation:'', amount:0, account_id:'', payment_method_id:''}
  formObject : Array<FormTemplate> = [];
  accounts : Array<OptionValue> = [];
  methods : Array<OptionValue> = [];
  tableObject : Array<any> = [];
  titles : Array<string> =  ['Id', 'Nombre', 'Costo', 'Fecha', 'Método pago', 'Cuenta']
  
  constructor( private movementService : MovementService, 
               private modalService : NgbModal, 
               private accountService : AccountService, 
               private bankService : BankService ) { }

  ngOnInit(): void {
    this.getMovements();
    this.getAccounts();
    this.getMethods();
  }

  getMovements(){
    this.movementSubscriptor = this.movementService.getMovements().subscribe((result:Array<Movement>)=>{
      this.movements = result;
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
    console.log(this.movements);
    this.tableObject = objectConfig.map( oc => Object.values(oc));
  }

  openModal(){
    this.initFormObject();

    const modal = this.modalService.open(FormModalComponent, {centered: true});
    modal.componentInstance.formTemplate = this.formObject;
    modal.result.then( ( res : Array<FormTemplate>) =>{        
        this.newMovement.name = res[0].inputValue;
        this.newMovement.observation = res[1].inputValue;
        this.newMovement.amount = res[2].inputValue;
        this.newMovement.movement_date = res[3].inputValue;
        this.newMovement.account_id = res[4].inputValue;
        this.newMovement.payment_method_id = res[5].inputValue;
        
        this.movementSubscriptor?.unsubscribe();
        this.movementService.postMovement(this.newMovement).then( resp => {
          this.getMovements();
        });
    }, error =>{
      console.log(error);
    });
  }

  initFormObject(){
    this.formObject = [{
      name: 'Nombre',
      inputType: 'text',
      inputValue: ''
    },
    {
      name: 'Observación',
      inputType: 'text',
      inputValue: ''
    },
    {
      name: 'Costo',
      inputType: 'numeric',
      inputValue: ''
    },
    {
      name: 'Fecha',
      inputType: 'text',
      inputValue: '' 
    },
    {
      name: 'Cuenta',
      inputType: 'select',
      inputValue: '',
      inputOptions: this.accounts
    },
    {
      name: 'Pago',
      inputType: 'select',
      inputValue: '',
      inputOptions: this.methods
    }]
  }

  getAccounts(){
    this.accountSubscriptor = this.accountService.getAccountDataToForm().subscribe((result:Array<OptionValue>)=>{
      this.accounts = result;
      console.log(this.accounts);
    });
  }

  getMethods(){
    this.bankSubscriptor = this.bankService.getMethodDataToForm().subscribe((result:Array<OptionValue>)=>{
      this.methods = result;
      console.log(this.methods);
    });
  }

  ngOnDestroy(){
    this.movementSubscriptor?.unsubscribe();
    this.accountSubscriptor?.unsubscribe();
    this.bankSubscriptor?.unsubscribe();
    console.log('destroy');
  }
}
