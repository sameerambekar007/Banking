export class AccountHolderinsert {
    customer_name: string;
    acct_type: string;
    service_ref_no:number;

    constructor(customer_name: string, acct_type: string,  service_ref_no:number)
    {
        this.customer_name= customer_name;
        this.acct_type = acct_type;
        this.service_ref_no = service_ref_no;
    }
}
