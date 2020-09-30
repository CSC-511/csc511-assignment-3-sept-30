import { helper } from '@ember/component/helper';

function colorCode(params) {
  if(params > 0)
    return "text-success";
  else if (params < 0)
    return "text-danger";
  else
    return "";
};

export default helper(colorCode);
