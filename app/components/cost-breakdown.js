import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CostBreakdownComponent extends Component {
    constructor(){
        super(...arguments);
    }

    @tracked sharedExpenses = [];
    @tracked finalList = [];
    @tracked name;
    @tracked event;
    @tracked spent;

    updateName(event){
        this.name = event.target.value;
    }

    updateEvent(event){
        this.event = event.target.value;
    }

    updateSpent(event){
        this.spent = event.target.value;
    }

    @action
    addExpense(){
        console.log("Add button was pressed")
        let object = {
            name: this.name,
            event: this.event,
            spent: this.spent
        };

        this.sharedExpenses.pushObject(object);

        this.name = '';
        this.event = '';
        this.spent = '';

        this.tallyUp();
    }

    @action
    removeExpense(index){
        this.sharedExpenses.removeAt(index);
        this.tallyUp();
    }

    @action
    tallyUp(){
        this.finalList.clear();
        let totalPaid = 0;
        for(let i = 0; i < this.sharedExpenses.length; i++){
            totalPaid += parseFloat(this.sharedExpenses[i].spent);
        }

        totalPaid = totalPaid / this.sharedExpenses.length

        for(let i = 0; i < this.sharedExpenses.length; i++){
            let object = {
                name: this.sharedExpenses[i].name,
                owes: this.sharedExpenses[i].spent - totalPaid
            };

            this.finalList.pushObject(object);
        }
    }

    autoTallyUp(){
        this.tallyUp();
    }
}
