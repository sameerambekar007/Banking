import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccountlockedComponent } from './accountlocked/accountlocked.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { AccountstatementmainComponent } from './accountstatementmain/accountstatementmain.component';
import { AccountstatusComponent } from './accountstatus/accountstatus.component';
import { AccountstatusmainComponent } from './accountstatusmain/accountstatusmain.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ApprovalpendingComponent } from './approvalpending/approvalpending.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ChangetransactionpasswordComponent } from './changetransactionpassword/changetransactionpassword.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { DisplaybeneficiariesComponent } from './displaybeneficiaries/displaybeneficiaries.component';
import { ErrorComponent } from './error/error.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForgottransactionpasswordComponent } from './forgottransactionpassword/forgottransactionpassword.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { HomeComponent } from './home/home.component';
import { ImpstransactionComponent } from './impstransaction/impstransaction.component';
import { InvalidtranspasswordComponent } from './invalidtranspassword/invalidtranspassword.component';
import { LoginComponent } from './login/login.component';
import { NeftransactionComponent } from './neftransaction/neftransaction.component';
import { OpenaccountComponent } from './openaccount/openaccount.component';
import { RegisterforibComponent } from './registerforib/registerforib.component';
import { RtgstransactionComponent } from './rtgstransaction/rtgstransaction.component';
import { SessionexpiredComponent } from './sessionexpired/sessionexpired.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
import { TableComponent } from './table/table.component';
import { TransactionfailedComponent } from './transactionfailed/transactionfailed.component';
import { TransactionsuccessComponent } from './transactionsuccess/transactionsuccess.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'accountstatement',component:AccountstatementComponent},
  {path:'accountstatementmain',component:AccountstatementmainComponent},
  {path:'registerforib',component:RegisterforibComponent},
  {path:'login',component:LoginComponent},
  {path:'openaccount',component:OpenaccountComponent},
  {path:'imps',component:ImpstransactionComponent},
  {path:'neft',component:NeftransactionComponent},
  {path:'rtgs',component:RtgstransactionComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'forgotuserid',component:ForgotuseridComponent},
  {path:'forgottranspass',component:ForgottransactionpasswordComponent},
  {path:'addben',component:AddbeneficiaryComponent},
  {path:'admindash',component:AdmindashboardComponent},
  {path:'admindash/:service_ref_no',component:AdmindashboardComponent},
  {path:'custdash',component:CustomerdashboardComponent},
  {path:'addben',component:AddbeneficiaryComponent},
  {path:'displaybeneficiaries',component:DisplaybeneficiariesComponent},
  {path:'sessionexpired',component:SessionexpiredComponent},
  {path:'setnewpass',component:SetnewpasswordComponent},
  {path:'transuccess',component:TransactionsuccessComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'changetranspass',component:ChangetransactionpasswordComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'accountsummary',component:AccountsummaryComponent},
  {path:'approvalpending',component:ApprovalpendingComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'custlogin',component:CustomerloginComponent},
  {path:'table',component:TableComponent},
  {path:'accountlocked',component:AccountlockedComponent},
  {path:'accountstatus',component:AccountstatusComponent},
  {path:'accountstatusmain',component:AccountstatusmainComponent},
  {path:'transactionfailed',component:TransactionfailedComponent},
  {path:'invalidtranspassword',component:InvalidtranspasswordComponent},
  {path:'fundtransfer',component:FundtransferComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
