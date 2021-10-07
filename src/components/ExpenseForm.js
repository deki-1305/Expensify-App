import React from "react";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props); 
    this.state = {
        description: props.expense ? props.expense.description : "",
        note: props.expense ? props.expense.note : "",
        amount: props.expense ? (props.expense.amount / 100).toString() : "",
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
    };
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () => ({description}) );
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) && this.setState( () => ({amount}) );
    };
    onDateChange = (createdAt) => {
        createdAt && this.setState(() => ({ createdAt }) );
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({ calendarFocused: focused }) ); 
    }; // obavezna stavka kod SingleDatePicker, nama ne sluzi nicemu 
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState( () => ({note}));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState( () => ({error: 'Please provide description and amount.'}) );
        } else { this.setState( () => ({error: ''}));
            this.props.onSubmit({     //ovo je onaj props onSubmit iz AddExpensePage prosledjen
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100, // x 100 da se oslobodimo decimala
                createdAt: this.state.createdAt.valueOf(), //moment() format pretvaramo u milisekunde
                note: this.state.note
            }) 
        }
    };
    render() {
        return(
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input type="text" 
                           placeholder="Description" 
                           autoFocus 
                           className="text-input" 
                           value={this.state.description} 
                           onChange={this.onDescriptionChange} />
                    <input type="text"
                           className="text-input" 
                           placeholder="Amount" 
                           value={this.state.amount}
                           onChange={this.onAmountChange} />
                    <SingleDatePicker
                           date={this.state.createdAt}
                           onDateChange={this.onDateChange}
                           focused={this.state.calendarFocused}
                           onFocusChange={this.onFocusChange} 
                           numberOfMonths={1} 
                           isOutsideRange={() => false}
                    />
                    <textarea placeholder = "Add a note for your expense (optional)" 
                              className="textarea" 
                              value={this.state.note}
                              onChange={this.onNoteChange}>
                    </textarea>
                    <div>
                        <button className="button">Save Expense</button>
                    </div>  
                </form>
        )
    }
}