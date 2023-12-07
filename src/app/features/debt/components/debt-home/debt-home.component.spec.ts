import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtHomeComponent } from './debt-home.component';

describe('DebtHomeComponent', () => {
  let component: DebtHomeComponent;
  let fixture: ComponentFixture<DebtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
