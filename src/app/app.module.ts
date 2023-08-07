/*
  ## AppModule

  The `AppModule` is the root module of the Angular application. It imports various modules and declares components that are part of the application.

  ### Declarations
  - `AppComponent`: The root component of the application that acts as the entry point.
  - `LoginComponent`: A component for the login page.
  - `DashboardComponent`: A component for the dashboard page.
  - `AccountDetailsComponent`: A component for displaying account details.
  - `DepositComponent`: A component for the deposit page.
  - `WithdrawComponent`: A component for the withdraw page.

  ### Imports
  - `BrowserModule`: A module required for browser-specific functionality.
  - `AppRoutingModule`: A custom module for routing configuration.
  - `FormsModule`: A module required for forms-related functionality.

  ### Providers
  - No specific providers are declared in this module.

  ### Bootstrap
  - `AppComponent`: The root component that is bootstrapped when the application starts.

*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AccountDetailsComponent,
    DepositComponent,
    WithdrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
