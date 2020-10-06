import { helper } from '@ember/component/helper';


function received([bill,num]) 
{
    let rec = [];

    num.forEach(attende => 
    {
        if(parseFloat(attende.bill) > parseFloat(bill))
            rec.pushObject(attende.name);
    });

    return rec;


  }

export default helper(received)
