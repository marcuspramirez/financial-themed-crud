import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FundComponent } from './fund/fund.component';
import { FundsComponent } from './funds/funds.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EditfundComponent } from './editfund/editfund.component';
import { FormsModule } from '@angular/forms';
import { AddFundComponent } from './add-fund/add-fund.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesPageComponent } from './services-page/services-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FundComponent,
    FundsComponent,
    NavbarComponent,
    EditfundComponent,
    AddFundComponent,
    FooterComponent,
    ServicesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
