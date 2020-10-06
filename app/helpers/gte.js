import { helper } from '@ember/component/helper';

function gte(num) 
{
  return parseInt(num[0]) > num[1];
}

export default helper(gte);
