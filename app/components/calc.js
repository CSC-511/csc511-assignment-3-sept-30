import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking';
export default class CalcComponent extends Component {


    @tracked nameList=[];
    @tracked eventList=[];
    @tracked costList=[];
    @tracked SplitwiseList= [];

    @tracked currentName;
    @tracked currentEvent;
    @tracked currentCost;


    constructor(){
        super(...arguments);
    }
    

    addToSplitwiseList(val1, val2, val3){
    val3=parseInt(val3);
    let newPerson
    newPerson= {name: val1, event: val2, cost: val3};
    this.SplitwiseList.pushObject(newPerson);
    console.log(this.SplitwiseList);
    this.currentName= ' ';
    this.currentEvent = ' ';
    this.currentCost = ' ';
    
    this.nameList.pushObject(val1);
    this.eventList.pushObject(val2);
    this.costList.pushObject(val3);

    }


    changeName(event){
        this.currentName = event.target.value;
    }


    changeCost(event){
        this.currentCost = event.target.value;
    }


    clearIndex(index){
        this.SplitwiseList.removeAt(index);
    }

    
    changeEvent(event){
        this.currentEvent = event.target.value;
    }
        
}