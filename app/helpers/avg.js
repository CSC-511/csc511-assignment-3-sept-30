import { helper } from '@ember/component/helper';
let avg = ([costList]) => {
    var sum = 0;
  for(var i=0; i < costList.length; i++){
      var sum = costList[i] + sum;
}
return(sum/costList.length)
}
export default helper(avg);