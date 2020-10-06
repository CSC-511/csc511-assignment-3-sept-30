import { helper } from '@ember/component/helper';

function calcTotal([numofppl])
{
  let tallyup= 0;
  let total = 0;

  numofppl.forEach(attende =>
  {
    total+= parseFloat(attende.bill);

  });

  tallyup = (total/numofppl.length).toFixed(2);

  return tallyup;
}

export default helper(calcTotal)
