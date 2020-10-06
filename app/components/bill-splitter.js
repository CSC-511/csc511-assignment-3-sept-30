import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

class Attende
{
    @tracked name;
    @tracked bill = 0;
}

export default class BillSplitterComponent extends Component 
{
    @tracked numOfPeople = [];
    @tracked currValue;

    constructor()
    {
        super(...arguments);
    }

    addtoPpl()
    {
        let name = this.currValue;

        if(this.numOfPeople.length >= 10)
        {
            alert("You can't add more than 10 participants!!!");
        }
        else 
        {
            let attende = new Attende();
            attende.name = name;
            this.addtoArray(attende);
        }
    }
    
    changeName(event)
    {
        this.currValue = event.target.value;
    }
    addtoArray(attende)
    {
        this.numOfPeople.pushObject(attende);
        this.currValue ='';
    }
   
    clearArray()
    {
        this.numOfPeople = [];
    }

    

    clearArrayAt(index)
    {
        this.numOfPeople.removeAt(index);
    }
    
    changeAmount(index, event)
    {
        // this.owes = [];
        // this.recieves = [];
        this.numOfPeople[index].bill = event.target.value;
    }
}