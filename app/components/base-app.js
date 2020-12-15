import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class BaseAppComponent extends Component {
    @tracked arrParticipants=[];
    @tracked currentParticipant;
    @tracked currentSpendingEvent;
    @tracked currentPaidBy;
    @tracked currentExpense;

    @tracked
    rows=[];

    addToArrParticipants(){
        //console.log(this.currentParticipant);
        this.arrParticipants.pushObject(this.currentParticipant);
        this.currentParticipant="";
    }

    addRowtoEventsTable(){
        // console.log(this.currentSpendingEvent);
        // console.log(this.currentPaidBy);
        // console.log(this.currentExpense);
        var mRow={};
        mRow.spendingEvent = this.currentSpendingEvent;
        mRow.paidBy = this.currentPaidBy;
        mRow.expense = parseFloat(this.currentExpense);
        // console.log(typeof(this.currentExpense));
        this.rows.pushObject(mRow);
        // console.log(this.rows);
        this.currentSpendingEvent="";
        this.currentPaidBy="";
        this.currentExpense="";
    }

    removeRowFromEventsTable(index){
        //console.log(this.rows[index]);
        this.rows.removeAt(index);
    }

    changeParticipant(event){
        console.log(event);
        this.currentParticipant = event.target.value;
    }

    changeSpendingEvent(event){
        console.log(event);
        this.currentSpendingEvent = event.target.value;
    }

    changeCurrentPaidBy(event){
        console.log(event);
        this.currentPaidBy = event.target.value;
    }

    changeCurrentExpense(event){
        console.log(event);
        this.currentExpense = event.target.value;
    }

    get participantsCanBeAdded(){
        return(this.arrParticipants.length ) < 10;
    }

    get spendingEventsCanBeAdded(){
        return (this.rows.length < 10) && (this.arrParticipants.length > 0);
    }

    get spendingEventMoreThanTen(){
        return (this.rows.length == 10) && (this.rows.length != 0);
    }

    get HasNoParticipant(){
        return this.arrParticipants.length == 0;
    }

    get numOfParticipants(){
        return this.arrParticipants.length;
    }

}
