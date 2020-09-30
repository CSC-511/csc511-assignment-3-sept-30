import { helper } from '@ember/component/helper';
let owed = ([peopleList, costList, index]) => {
    var numPeople = 0;
    var sum = 0;
    var averageOwed = 0;
    var total = 0;
    for(var i=0; i < peopleList.length; i++){
        numPeople++;
    }
  for(var i=0; i < costList.length; i++){
      var sum = costList[i] + sum;  
    }
    averageOwed = sum / numPeople;
    total = averageOwed - costList[index];
    if (total <= 0)
        return peopleList[index] + " is owed$" + total;
}
export default helper(owed);