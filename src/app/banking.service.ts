import { Injectable } from '@angular/core';
import {Admin} from './admin';
import { Openaccount } from './openaccount';
import {Addbeneficiary} from './addbeneficiary';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { CustomerRequests } from "./customer-requests";
import { Impstransfer } from "./impstransfer";
	import {  Observable, throwError } from 'rxjs';
  import {AccountHolderinsert} from "./account-holderinsert";
import {AccountHolder} from "./account-holder";
import {Transactions} from "./transactions";
import {Registerforib} from './registerforib';
import {Accountstatement} from './accountstatement';

@Injectable({
  providedIn: 'root'
})
export class BankingService {
  private apiServer = "http://localhost:62705/Api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  login(admin):Observable<Admin>
  {
    //console.log("INSIDE SERVECE",user1);
    var req = this.httpClient.post<Admin>(this.apiServer + '/Adminslogin/',JSON.stringify(admin), this.httpOptions)
    console.log(req);
    return(req);
  }
  custlogin(accountholder):Observable<AccountHolder>
  {
    console.log("INSIDE SERVICE",accountholder);
    var req = this.httpClient.post<AccountHolder>(this.apiServer + '/Account_HolderLogin/',JSON.stringify(accountholder), this.httpOptions)
    console.log(req);
    return(req);
  }
  custblocked(accountholder): Observable<AccountHolder> {
   // console.log("INSIDE SERVICE",accountholder);
    return this.httpClient.post<AccountHolder>(this.apiServer + '/AccountBlock/', JSON.stringify(accountholder), this.httpOptions)
  }
  create(Customer): Observable<Openaccount> {
     console.log("INSIDE SERVICE",Customer);
     return this.httpClient.post<Openaccount>(this.apiServer + '/OpenAccount/', JSON.stringify(Customer), this.httpOptions)
 }
 getAll(): Observable<CustomerRequests[]> {
  //console.log("INSIDE SERVICE");
  return this.httpClient.get<CustomerRequests[]>(this.apiServer + '/AdminDashboard/')
}
getAll1(): Observable<Openaccount[]> {
  //console.log("INSIDE SERVICE");
  return this.httpClient.get<Openaccount[]>(this.apiServer + '/OpenAccount/')
}
getAllaccountholders(): Observable<AccountHolder[]> {
  //console.log("INSIDE SERVICE");
  return this.httpClient.get<AccountHolder[]>(this.apiServer + '/Account_HolderLogin/')
}
getAllBeneficiaries(): Observable<Addbeneficiary[]> {
  //console.log("INSIDE SERVICE");
  return this.httpClient.get<Addbeneficiary[]>(this.apiServer + '/AddBeneficiaries/')
}
accountsummary(AccountHolder): Observable<Addbeneficiary> {
  console.log("INSIDE SERVICE",AccountHolder);
  return this.httpClient.post<Addbeneficiary>(this.apiServer + '/AccountSummary/', JSON.stringify(AccountHolder), this.httpOptions)
}
accountstatement(accountholder): Observable<Accountstatement> {
  console.log("INSIDE SERVICE",accountholder);
  var result= this.httpClient.post<Accountstatement>(this.apiServer + '/AccountStatement/', JSON.stringify(accountholder), this.httpOptions)
  //console.log( result)
  return (result);
}
fetchuserdetails(Customer): Observable<Registerforib> {
  console.log("INSIDE SERVICE",Customer);
  return this.httpClient.post<Registerforib>(this.apiServer + '/FetchUserProfile/', JSON.stringify(Customer), this.httpOptions)
}
changepassword(accountholder): Observable<Registerforib> {
  console.log("INSIDE SERVICE",accountholder);
  return this.httpClient.post<Registerforib>(this.apiServer + '/ChangePassword/', JSON.stringify(accountholder), this.httpOptions)
}
changetranspassword(accountholder): Observable<Registerforib> {
  console.log("INSIDE SERVICE",accountholder);
  return this.httpClient.post<Registerforib>(this.apiServer + '/ChangeTransPassword/', JSON.stringify(accountholder), this.httpOptions)
}
forgotcustomerid(accountholder): Observable<Registerforib> {
  //console.log("INSIDE SERVICE",accountholder);
  return this.httpClient.post<Registerforib>(this.apiServer + '/ForgotCustomerId/', JSON.stringify(accountholder), this.httpOptions)
}
sendcustomerid(accountholder): Observable<Registerforib> {
  //console.log("INSIDE SERVICE",accountholder);
  return this.httpClient.post<Registerforib>(this.apiServer + '/sendcustomerid/', JSON.stringify(accountholder), this.httpOptions)
}
forgotpassword(accountholder): Observable<Registerforib> {
  //console.log("INSIDE SERVICE",accountholder);
  return this.httpClient.post<Registerforib>(this.apiServer + '/ForgotPassword/', JSON.stringify(accountholder), this.httpOptions)
}
sendpassword(accountholder): Observable<Registerforib> {
  //console.log("INSIDE SERVICE",accountholder);
  return this.httpClient.post<Registerforib>(this.apiServer + '/sendpassword/', JSON.stringify(accountholder), this.httpOptions)
}
forgotTranspasssword(accountholder): Observable<Registerforib> {
  //console.log("INSIDE SERVICE",accountholder);
  return this.httpClient.post<Registerforib>(this.apiServer + '/ForgotTransPassword/', JSON.stringify(accountholder), this.httpOptions)
}
sendTranspassword(accountholder): Observable<Registerforib> {
  //console.log("INSIDE SERVICE",accountholder);
  return this.httpClient.post<Registerforib>(this.apiServer + '/sendTranspassword/', JSON.stringify(accountholder), this.httpOptions)
}
fetchaccountopeningsatatus(Customer): Observable<Openaccount> {
  console.log("INSIDE SERVICE",Customer);
  return this.httpClient.post<Openaccount>(this.apiServer + '/CheckAccountOpeningStatus/', JSON.stringify(Customer), this.httpOptions)
}
fetchsuccessfultrans(Transaction): Observable<Transactions> {
  console.log("INSIDE SERVICE",Transaction);
  return this.httpClient.post<Transactions>(this.apiServer + '/FetchTransactions/', JSON.stringify(Transaction), this.httpOptions)
}

getById(account_no): Observable<CustomerRequests> {
  return this.httpClient.get<CustomerRequests>(this.apiServer + '/Account_HolderLogin/' + account_no)
}
getreleventbeneficiary(beneficiaries):Observable<Addbeneficiary>
  {
    console.log("INSIDE SERVICE",beneficiaries);
    return this.httpClient.post<Addbeneficiary>(this.apiServer + '/GetRelevantBeneficiaries/',JSON.stringify(beneficiaries), this.httpOptions)
    // console.log(req);
    // return(req);
  }
approve(service_ref_no, Customer): Observable<CustomerRequests> {
  return this.httpClient.put<CustomerRequests>(this.apiServer + '/Account_HolderInsert/' + service_ref_no, JSON.stringify(Customer), this.httpOptions)
}
approvechangestatus(Customer): Observable<Openaccount> {
  console.log("INSIDE SERVICE",Customer);
  return this.httpClient.post<Openaccount>(this.apiServer + '/ApproveAccount/', JSON.stringify(Customer), this.httpOptions)
}
declineaccount(Customer): Observable<Openaccount> {
  console.log("INSIDE SERVICE",Customer);
  return this.httpClient.post<Openaccount>(this.apiServer + '/DeclineAccount/', JSON.stringify(Customer), this.httpOptions)
}

addben(Beneficiary): Observable<Addbeneficiary> {
  console.log("INSIDE SERVICE",Beneficiary);
  return this.httpClient.post<Addbeneficiary>(this.apiServer + '/AddBeneficiaries/', JSON.stringify(Beneficiary), this.httpOptions)
}
registerforib(Customer): Observable<Registerforib> {
  console.log("INSIDE SERVICE",Customer);
  return this.httpClient.post<Registerforib>(this.apiServer + '/RegisterForIB/', JSON.stringify(Customer), this.httpOptions)
}
imps(impstransaction): Observable<Impstransfer> {
  console.log("INSIDE SERVICE",impstransaction);
  var result= this.httpClient.post<Impstransfer>(this.apiServer + '/Impstransfer/', JSON.stringify(impstransaction), this.httpOptions)
  return (result);
}
neft(impstransaction): Observable<Impstransfer> {
  console.log("INSIDE SERVICE",impstransaction);
  return this.httpClient.post<Impstransfer>(this.apiServer + '/Nefttransfer/', JSON.stringify(impstransaction), this.httpOptions)
}
rtgs(impstransaction): Observable<Impstransfer> {
  console.log("INSIDE SERVICE",impstransaction);
  return this.httpClient.post<Impstransfer>(this.apiServer + '/Rtgstransfer/', JSON.stringify(impstransaction), this.httpOptions)
}
Accountholder(Accountholder): Observable<AccountHolderinsert> {
  console.log("INSIDE SERVICE",Accountholder);
  return this.httpClient.post<AccountHolderinsert>(this.apiServer + '/Account_HolderInsert/', JSON.stringify(Accountholder), this.httpOptions)
}
loggedIn() {
  if(sessionStorage.getItem('customer_id')!=null)
  {
    return true;
  }
  else{
    return false;
  }
}
adminloggedIn() {
  if(sessionStorage.getItem('admin_id')!=null)
  {
    return true;
  }
  else{
    return false;
  }
}
}
