import {helper} from '@ember/component/helper';

function showbutton(args) {
    if(args == 0){
        return false;
    }
    else
    return true;
  }

export default helper(showbutton);