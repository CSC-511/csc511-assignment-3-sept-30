import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { set } from '@ember/object';

export default class CostComponent extends Component {
    @tracked user = null;
    @tracked users = [];
    @tracked userOutput = [];
    @tracked size = null;
    @tracked total = null;
    @tracked clicked = false;
    @tracked needToPay = null;
    @tracked owe = null;
    @tracked activity = null;
    @tracked actOutput = [];
    @tracked activities = ["None"];
    @tracked submitted = false;
    @tracked notEmpty = true;

    outputUsers(){
        let usLen = this.users.length;
        if(usLen != 0){
            for(let x = 0; x < usLen; x++){
                this.userOutput.pushObject({
                name: this.users[x],
                amount: 0.00,
                balance: 0.00,
                activity: "None"});               
            }
            this.submitted = true;
        }
        let acLen = this.actOutput.length;
        if(acLen != 0){
            for(let x = 0; x < acLen; x++){
                this.activities.pushObject(this.actOutput[x])              
            }
        }
        this.size = this.userOutput.length;
        this.users = [];
        this.actOutput = [];
    }

    addAmount(index, input){
        if(input == 0 || input == null){
            set(this.userOutput[index], "amount", 0.00)
        }
        else{
            set(this.userOutput[index], "amount", input)
        }
    }

    calculate(){
        if(this.size <= 1){
            alert('Enter 2 or more names!')
        }
        else{
            this.clicked = true;
            this.notEmpty = true;
            let totalCost = 0;
            for(let x = 0; x < this.size; x++){
                let paid = parseFloat(this.userOutput[x].amount)
                totalCost += paid;
            }
            this.total = (totalCost).toFixed(2);
            this.needToPay = (totalCost/this.size).toFixed(2);

            for(let y = 0; y <this.size; y++){
                let difference = 0.00;
                let paid = parseFloat(this.userOutput[y].amount)
                difference = paid - this.needToPay;
                if(difference > 0){
                    set(this.userOutput[y], "balance", difference.toFixed(2));
                }
                if(difference == 0){
                    set(this.userOutput[y], "balance", 0.00);
                }                
                if(difference < 0){
                    set(this.userOutput[y], "balance", difference.toFixed(2));
                }                
            }
        }
        
    }

    updateUser(input){
        this.user = input.target.value;
    }

    addUser(){
        if(this.user != null){
            this.users.pushObject(this.user);
            this.user = null;
        }       
    }

    removeUser(index){
        this.users.removeAt(index);
    }

    updateActivity(input){
        this.activity = input.target.value;
    }

    addActivity(){
        if(this.activity != null){
            this.actOutput.pushObject(this.activity);
            this.activity = null;
        }  
    }

    removeAct(index){
        this.actOutput.removeAt(index);
    }

    removeEverything(index){
        this.userOutput.removeAt(index);
        this.owed = [];
        this.size = this.userOutput.length;
        if(this.size == 0){
            this.notEmpty = false;
            this.clicked = false;
            this.submitted = false;
        }
    }

    setActivity(index, input){
        set(this.userOutput[index], "activity", input);
        if(input == "None"){
            document.getElementById("amount" + index).disabled = true;
            set(this.userOutput[index], "amount", 0);
        }
        else
        {
            document.getElementById("amount" + index).disabled = false;
        }         
    }
    
}
