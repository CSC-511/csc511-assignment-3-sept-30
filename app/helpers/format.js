import {helper} from '@ember/component/helper';

function format(args) {
    if(Math.sign(args) == 1 || Math.sign(args) == 0){
        return "$" + args;
    }
    else{
        let str = args.toString();
        str = str.substring(1);
        return "-$" + str;
    }
  }

export default helper(format);