import { helper } from '@ember/component/helper';
let sum = ([costList]) => {
    var sum = 0;
  for(var i=0; i < costList.length; i++){
    var sum = costList[i] + sum;
}
return(sum)
}
export default helper(sum);