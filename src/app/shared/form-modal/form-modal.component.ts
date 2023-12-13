import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormTemplate } from '../interfaces/form-modal.interface';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {

  @Input() formTemplate : Array<FormTemplate> = [];
  @Output() formData = new EventEmitter<Array<FormTemplate>>();

	closeResult = '';

  constructor( public activateModal : NgbActiveModal ) { }

  ngOnInit(): void {
  }

  sendData(){
    this.formData.emit(this.formTemplate);
  }
}
