import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

class Person{
    @tracked name;
    @tracked purchase = 0;
}

export default class SplitComponent extends Component {

    @tracked listOfPeople = [];
    @tracked currentValue;
    @tracked average = 0;

    constructor(){
        super(...arguments);
    }

    addPerson() {
        let name = this.currentValue;
        let unique = true;
        if(this.listOfPeople.length > 9){
            alert("Only 10 names at a time can be added to the list!");
            unique = false;
        }
        else if(this.listOfPeople.length > 0){
            this.listOfPeople.forEach(person => {
                if(person.name === name){
                    alert("Please use a unique name!");
                    unique = false;
                }
            });
        }
        if(unique){
            let person = new Person();
            person.name = name;

            this.addToArray(person);
        }   
    }

    addToArray(person){
        this.listOfPeople.pushObject(person);
        this.currentValue = '';
    }

    clearArray(){
        this.listOfPeople = [];
    }
    clearArrayIndex(index){
        this.listOfPeople.removeAt(index);
    }

    changeValueName(event){
        this.currentValue = event.target.value;
    }
    changeValue(index, event){
        this.owes = [];
        this.owed = [];
        this.listOfPeople[index].purchase =  event.target.value;
        this.listOfPeople = this.listOfPeople;
    }

    updateAverage(number){
        this.average = number;
        console.log(this.average);
    }
}