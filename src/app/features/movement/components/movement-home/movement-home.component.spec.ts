import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementHomeComponent } from './movement-home.component';

describe('MovementHomeComponent', () => {
  let component: MovementHomeComponent;
  let fixture: ComponentFixture<MovementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
