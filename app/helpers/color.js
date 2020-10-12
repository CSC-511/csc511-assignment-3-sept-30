import {helper} from '@ember/component/helper';

function color(args) {
    let colors = args;
    if(colors > 0){
        return "orange";
    }
    if(colors == 0)
    return "green";
    else
    return "red"
  }

export default helper(color);