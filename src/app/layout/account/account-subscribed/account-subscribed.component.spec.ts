import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSubscribedComponent } from './account-subscribed.component';

describe('AccountSubscribedComponent', () => {
  let component: AccountSubscribedComponent;
  let fixture: ComponentFixture<AccountSubscribedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSubscribedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSubscribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
