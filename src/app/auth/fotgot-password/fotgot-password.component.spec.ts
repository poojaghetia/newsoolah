import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotgotPasswordComponent } from './fotgot-password.component';

describe('FotgotPasswordComponent', () => {
  let component: FotgotPasswordComponent;
  let fixture: ComponentFixture<FotgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
