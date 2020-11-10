import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { set } from '@ember/object';

export default class CostComponent extends Component {
    @tracked user = null;
    @tracked users = [];
    @tracked userOutput = [];
    @tracked activity = null;
    @tracked actOutput = [];
    @tracked activities = ["None"];
    @tracked submitted = false;

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

    updateUser(input){
        this.user = input.target.value;
    }

    addUser(){
        alert(this.user)
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
    
}
