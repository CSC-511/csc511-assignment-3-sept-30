import { helper } from '@ember/component/helper';

function dollarFormatter(params) {
  const formatConfig = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    // currencyDisplay: "symbol",
  };

  let formattedUSDollar = new Intl.NumberFormat("en-US", formatConfig).format(params);
  
  return formattedUSDollar;
};

export default helper(dollarFormatter);