import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AuthGuard } from './auth.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'account-details/:accountId', component: AccountDetailsComponent, canActivate: [AuthGuard] },
  { path: 'deposit/:accountId', component: DepositComponent, canActivate: [AuthGuard] },
  { path: 'withdraw/:accountId', component: WithdrawComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }, // Redirect to login for all other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
