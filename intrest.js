function Getamount()
{
    let p,t,r,si,amt;
    p=pamt.value;
    t=time.value;
    r=roi.value;
    si=p*t*r/100;
    amt=+p+si
    intrest.value=`intrestamount :`+si;
    totamt.value=`Totalamount :`+si;
    document.write(`totamt.value`);
    prompt(`valid time`);

}