import { helper } from '@ember/component/helper';

function addBtnDisabled(params) {
  let array = params[0];
  let name = params[1];
  let event = params[2];
  let spent = params[3];

  if(array.length < 10 && name && event && spent)
    return false;
  else
    return true;
};

export default helper(addBtnDisabled);
