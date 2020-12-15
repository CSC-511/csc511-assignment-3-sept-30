import { helper } from '@ember/component/helper';

export default helper(function formatNumber(moneyVal) {
  moneyVal = moneyVal[0];
  moneyVal = Math.abs(moneyVal);
  var i = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD' 
    }).format(moneyVal);
    return i;
});
