import { helper } from '@ember/component/helper';

function tallyUpBtnDisabled(params) {
  let array = params[0];

  if(array.length >= 2)
    return false;
  else
    return true;
};

export default helper(tallyUpBtnDisabled);
