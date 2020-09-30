import { helper } from '@ember/component/helper';
import getSum from './getSum';

let numPeople = ([nameList]) => {

    var num = 0;
    

    for(var i=0; i < nameList.length; i++){
        num++;
  }
  

  return "Number of people: " + num + ".";

}

export default helper(numPeople);


