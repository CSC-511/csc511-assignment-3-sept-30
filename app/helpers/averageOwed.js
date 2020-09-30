import { helper } from '@ember/component/helper';
import getSum from './getSum';

let averageOwed = ([nameList, costList]) => {

    var numPeople = 0;
    var sum = 0;
    var total = 0;

    for(var i=0; i < nameList.length; i++){
        numPeople++;
    }

  for(var i=0; i < costList.length; i++){
      var sum = costList[i] + sum;  
    }

    total = sum / numPeople;
  

  return "The total divided by number of guests is $" + total + ".";

}

export default helper(averageOwed);