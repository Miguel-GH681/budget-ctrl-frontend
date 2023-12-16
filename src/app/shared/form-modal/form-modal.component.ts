import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormTemplate } from '../interfaces/form-modal.interface';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {

  @Input() formTemplate : Array<FormTemplate> = [];

  constructor( public activateModal : NgbActiveModal) { }

  ngOnInit(): void {
  }
}
