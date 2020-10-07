import { helper } from '@ember/component/helper';


function split(money)
{

    let diff = parseFloat(money[0] - money[1]).toFixed(2);
    
    return diff;
}
export default helper(split)