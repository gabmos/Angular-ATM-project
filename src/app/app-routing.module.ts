/*
  ## AppRoutingModule

  The `AppRoutingModule` is responsible for defining the routing configuration for the Angular application.

  ### Routes
  - `/login`: Route to the login page (`LoginComponent`). This page is accessible without authentication.
  - `/dashboard`: Route to the dashboard page (`DashboardComponent`). This page requires authentication, enforced by the `AuthService`.
  - `/account-details/:accountId`: Route to the account details page (`AccountDetailsComponent`). This page requires authentication, enforced by the `AuthService`.
  - `/deposit/:accountId`: Route to the deposit page (`DepositComponent`). This page requires authentication, enforced by the `AuthService`.
  - `/withdraw/:accountId`: Route to the withdraw page (`WithdrawComponent`). This page requires authentication, enforced by the `AuthService`.
  - `**` (Wildcard Route): Redirects to the login page for all other paths. This ensures that any unknown or invalid paths are redirected to the login page.

  ### Modules and Components
  - `RouterTestingModule`: The Angular testing module for testing routing-related functionality.
  - `RouterModule`: The Angular module for handling routing and navigation.

  ### Providers
  - `AuthService`: A custom route guard service that controls access to certain routes based on authentication status.

  ### Usage
  - The `AppRoutingModule` is imported and used in the main application module (`AppModule`) via the `imports` property. It configures the application's routing based on the defined routes.

  ### Note
  - The `AuthService` is used to protect routes that require authentication. When a user tries to access a protected route, the `AuthService` will be executed to check if the user is authenticated. If the user is not authenticated, they will be redirected to the login page.

*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AuthService } from './auth.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthService] },
  { path: 'account-details/:accountId', component: AccountDetailsComponent, canActivate: [AuthService] },
  { path: 'deposit/:accountId', component: DepositComponent, canActivate: [AuthService] },
  { path: 'withdraw/:accountId', component: WithdrawComponent, canActivate: [AuthService] },
  { path: '**', redirectTo: 'login' }, // Redirect to login for all other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
