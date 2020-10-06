import { helper } from '@ember/component/helper';


function attende_Owes([bill,num]) 
{
  let owes = [];

  num.forEach(attende => 
  {
      if(parseFloat(attende.bill) < parseFloat(bill))

          owes.pushObject(attende.name, " ");
  });

  return owes;
}
export default helper(attende_Owes)
