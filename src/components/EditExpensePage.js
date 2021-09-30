import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { startRemoveExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    return(
    <div>
        <ExpenseForm 
        expense={props.expense} 
        onSubmit={(expense => {
            props.dispatch(editExpense(props.expense.id, expense)); 
            props.history.push('/');
        })}
        />
        <button onClick = { () => {
            props.dispatch( startRemoveExpense({id: props.expense.id}) );
            props.history.push('/');
        }
        }>Remove</button>
    </div>
    )
};   

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)   
        //samo uslov iznad(vrednost uslova true) daje vrednost expense(gore)(ES6 bez return{})
    };
};

export default connect(mapStateToProps)(EditExpensePage);