import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/features/account/interfaces/account.interface';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.css']
})
export class RecordCardComponent implements OnInit {

  @Input() account! : Account;

  constructor() { }

  ngOnInit(): void {
  }
}
