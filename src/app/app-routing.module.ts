import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundsComponent } from './funds/funds.component';
import { FundComponent } from './fund/fund.component';
import { HomeComponent } from './home/home.component';
import { EditfundComponent } from './editfund/editfund.component';
import { AddFundComponent } from './add-fund/add-fund.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  {path: "funds", component: FundsComponent},
  {path: "", component: HomeComponent},
  {path: "addfund", component: AddFundComponent},
  {path: "home", component: HomeComponent},
  {path: "servicespage", component: ServicesPageComponent},
  {path: "funds/:id/edit", component: EditfundComponent},
  {path: "funds/:id", component: FundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
