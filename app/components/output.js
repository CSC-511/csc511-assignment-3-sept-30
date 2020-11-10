import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object'

export default class OutputComponent extends Component {
  @tracked userInfo = [];
  @tracked userAct = [];
  @tracked userSize;
  @tracked clicked = false;
  @tracked notEmpty = false;
  @tracked total;
  @tracked needToPay = 0.00;

  constructor() {
    super(...arguments);
    this.userInfo = this.args.userInfo;
    this.userAct = this.args.userAct;
  }

  clearEverything(index) {
    this.userInfo.removeAt(index);
    this.userSize = this.userInfo.length;
    this.tallyUp();
    if (this.userSize == 0) {
      this.notEmpty = false;
      this.clicked = false;
    }
  }

  tallyUp() {
    this.userSize = this.userInfo.length;
    this.clicked = true;
    this.notEmpty = true;
    let totalCost = 0;
    for (let x = 0; x < this.userSize; x++) {
      let paid = parseFloat(this.userInfo[x].amount)
      totalCost += paid;
    }
    this.total = (totalCost).toFixed(2);
    this.needToPay = (totalCost / this.userSize).toFixed(2);

    for (let y = 0; y < this.userSize; y++) {
      let difference = 0.00;
      let paid = parseFloat(this.userInfo[y].amount)
      difference = paid - this.needToPay;
      if (difference > 0) {
        set(this.userInfo[y], "balance", difference.toFixed(2));
      }
      if (difference == 0) {
        set(this.userInfo[y], "balance", 0.00);
      }
      if (difference < 0) {
        set(this.userInfo[y], "balance", difference.toFixed(2));
      }
    }
  }

  addAmount(index, input){
    if(input == 0 || input == null){
        set(this.userInfo[index], "amount", 0.00)
    }
    else{
        set(this.userInfo[index], "amount", input)
    }
  }

  setActivity(index, input){
    set(this.userInfo[index], "activity", input);
    if(input == "None"){
        document.getElementById("amount" + index).disabled = true;
        set(this.userInfo[index], "amount", 0);
    }
    else
    {
        document.getElementById("amount" + index).disabled = false;
    }         
}
}
