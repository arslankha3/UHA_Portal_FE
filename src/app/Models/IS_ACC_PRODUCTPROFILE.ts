export interface IS_ACC_PRODUCTPROFILE {
    PRP_PROFILEID: string;
    PRD_PRODUCTID: string;
    ACC_SYSTEMCODE: string;
    ACC_CODE: number | null;
    PDP_PLANCODE: number | null;
    FND_FUNDCODE: number | null;
    PUC_CLASSCODE: string;
    PUT_UNITTYPE: string;
    PAT_ALLOCATIONTABLEID: number | null;
    PRP_LASTCHANEOFALLOCSCHDATE: string | null;
    PRP_INCOMEFREQUENCY: string;
    PRP_LASTINCOMEDATE: string | null;
    PPR_NEXTINCOMEDATE: string | null;
    PRP_TARGETINCOME: number | null;
    PRP_FIXEDINCOME: number | null;
    PRP_PROFITASINCOME: boolean | null;
    PRP_MONTHLYINCOMERETENTIONPERCENT: number | null;
    PRP_MONTHLYINCOMEDISBURSEPERCENT: number | null;
    PRP_REINVESTDISBURSEMENT: number | null;
    PRP_USEUSERALLOCATIONTABLE: boolean | null;
    PRP_USERALLOCATIONTABLE: number | null;
    PRP_LASTALLOCATIONDATE: string | null;
    PRP_INSURANCESCHEMEID: number | null;
    PRP_SAVINGAMOUNT: number | null;
    PRP_SAVINGFREQUENCY: string;
    PPS_SAVINGSCHEDULEID: number | null;
    PRP_ISZEROBALANCE: boolean | null;
    PRP_STATUS: string;
    PRP_PROFILECREATEDON: Date | null;
    PRP_NONTRADINGFUNDPRODUCTID: string;
    PRP_NONTRADINGFUND: number | null;
    PRP_NONTRADINGFUNDCLASS: string;
    PRP_NONTRADINGFUNDUNITTYPE: string;
    PRP_INCOMEPAYINGFUNDPRODUCTID: string;
    PRP_INCOMEPAYINGFUND: number | null;
    PRP_INCOMEPAYINGFUNDCLASS: string;
    PRP_INCOMEPAYINGFUNDUNITTYPE: string;
    PRP_VERSION: number | null;
    PRP_CREATEDON: Date| null;
    PRP_CREATEDBY: string;
    PRP_MODIFIEDON: string | null;
    PRP_MODIFIEDBY: string;
    PRP_DIGITALCERTIFICATE: string;
    TSTAMP: string;
    PRP_OPTIONMETHOD: string;
    PRP_COMMENTS: string;
    PRP_PAYMENTPLANYEARS: number | null;
    PRP_MONTHLYSTARTDATE: string | null;
    PRP_MONTHLYENDDATE: string | null;
    PRP_MONTLYPAYMENTAMOUNT: number | null;
    PRP_MONTHLYPAYMENTSTARTDATE: string | null;
    PRP_MONTHLYPAYMENTENDDATE: string | null;
    ACC_ISSSAACCOUNT: number | null;
    //iS_ACC_ACCOUNT: IS_ACC_ACCOUNT;
}