import { helper } from '@ember/component/helper';
import totalOwes from './totalOwes';

let totalOwed = ([nameList, costList, index]) => {
    var numPeople = 0;
    var sum = 0;
    var averageOwed = 0;
    var total = 0;

    for(var i=0; i < nameList.length; i++){
        numPeople++;
    }

  for(var i=0; i < costList.length; i++){
      var sum = costList[i] + sum;  
    }

    averageOwed = sum / numPeople;
   
    total = averageOwed - costList[index];
    
    if (total <= 0){
        return nameList[index] + " is owed $" + (-1 *total);
    }

    }

export default helper(totalOwed);
