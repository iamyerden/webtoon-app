import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountInformationComponent } from './account-information/account-information.component';
import { AccountSubscribedComponent } from './account-subscribed/account-subscribed.component';


@NgModule({
  declarations: [AccountInformationComponent, AccountSubscribedComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
