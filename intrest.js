function getAmount()
{
	let p, t, r, si, amt;	//local vars
	//data coll
	p=pamt.value;
	t=time.value;
	r=roi.value;
	//calc's
	si=p*t*r/100;
	amt=+p+si;
	//displaying results
	interest.value='Interest Amount	:'+si;
	totAmt.value='Total Amount	:'+amt;
}