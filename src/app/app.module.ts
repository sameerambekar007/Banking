import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BnNgIdleService } from 'bn-ng-idle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { ErrorComponent } from './error/error.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
import { ImpstransactionComponent } from './impstransaction/impstransaction.component';
import { LoginComponent } from './login/login.component';
import { NeftransactionComponent } from './neftransaction/neftransaction.component';
import { OpenaccountComponent } from './openaccount/openaccount.component';
import { RegisterforibComponent } from './registerforib/registerforib.component';
import { RtgstransactionComponent } from './rtgstransaction/rtgstransaction.component';
import { SessionexpiredComponent } from './sessionexpired/sessionexpired.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
import { TransactionsuccessComponent } from './transactionsuccess/transactionsuccess.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountstatementmainComponent } from './accountstatementmain/accountstatementmain.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApprovalpendingComponent } from './approvalpending/approvalpending.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { TableComponent } from './table/table.component';
import { AccountlockedComponent } from './accountlocked/accountlocked.component';
import { AccountstatusComponent } from './accountstatus/accountstatus.component';
import { AccountstatusmainComponent } from './accountstatusmain/accountstatusmain.component';
import { TransactionfailedComponent } from './transactionfailed/transactionfailed.component';
import { InvalidtranspasswordComponent } from './invalidtranspassword/invalidtranspassword.component';
import { ChangetransactionpasswordComponent } from './changetransactionpassword/changetransactionpassword.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ForgottransactionpasswordComponent } from './forgottransactionpassword/forgottransactionpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountstatementComponent,
    AddbeneficiaryComponent,
    AdmindashboardComponent,
    CustomerdashboardComponent,
    ErrorComponent,
    ForgotpasswordComponent,
    ForgotuseridComponent,
    ImpstransactionComponent,
    LoginComponent,
    NeftransactionComponent,
    OpenaccountComponent,
    RegisterforibComponent,
    RtgstransactionComponent,
    SessionexpiredComponent,
    SetnewpasswordComponent,
    TransactionsuccessComponent,
    AccountsummaryComponent,
    UserprofileComponent,
    ChangepasswordComponent,
    AccountstatementmainComponent,
    AboutusComponent,
    ApprovalpendingComponent,
    CustomerloginComponent,
    TableComponent,
    AccountlockedComponent,
    AccountstatusComponent,
    AccountstatusmainComponent,
    TransactionfailedComponent,
    InvalidtranspasswordComponent,
    ChangetransactionpasswordComponent,
    FundtransferComponent,
    ContactusComponent,
    ForgottransactionpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
