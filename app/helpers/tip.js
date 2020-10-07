import { helper } from '@ember/component/helper';


function tip(num,total)
{

  let perc = num/100
  total = parseFloat((perc*total)+total).toFixed(2)

  return total;

}



export default helper(tip)
