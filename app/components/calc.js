import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking';
export default class CalcComponent extends Component {
    @tracked peopleList = [];
    @tracked eventList = [];
    @tracked costList=[];
    @tracked AllInfo= [

    ]
    @tracked sum=0;
    @tracked currentName;
    @tracked currentEvent;
    @tracked currentCost;
    @tracked cost;
    constructor(){
        super(...arguments);
    }

    sum=0;
    addToAllInfo(val1,val2,val3){
    val3=parseInt(val3)
    let newPerson
    newPerson= {Name: val1, Event: val2, Cost: val3}
    this.AllInfo.pushObject(newPerson)
    console.log(this.AllInfo)
    this.currentName= ' ';
    this.currentEvent = ' ';
    this.currentCost =  ''
    this.peopleList.pushObject(val1);
    this.costList.pushObject(val3);
    };



    changeName(event){
        this.currentName = event.target.value;
    }
    changeCost(event){
        this.currentCost = event.target.value;
    }
    clearIndex(index){
        this.AllInfo.removeAt(index);
    }
    changeEvent(event){
        this.currentEvent = event.target.value;
    }
    clearEventIndex(index){
        this.eventList.removeAt(index);
    }
    getCost(){
        cost = getElementById("cost");
        return cost;
    }
} 