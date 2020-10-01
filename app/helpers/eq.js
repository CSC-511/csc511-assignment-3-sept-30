import { helper } from '@ember/component/helper';

export default helper(function eq(params) {
  //console.log(totalExpense);
  //console.log(numOfParticipants);
  return params[0]===params[1];
});
