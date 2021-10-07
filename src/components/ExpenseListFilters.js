import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (focusedInput) => {    //moze bilo koji naziv ulaza
        this.setState(() => ({ calendarFocused: focusedInput }) ); 
    }; 
    render() {
        return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input type = "text" className="text-input" 
                    placeholder="Search expenses"
                    value = {this.props.filters.text} 
                    onChange = {(e) => {
                    props.dispatch(setTextFilter(e.target.value));
                    }} />
                </div>
                <div className="input-group__item">
                    <select className="select" 
                    value = {this.props.filters.sortBy} onChange = {(e) => {
                    e.target.value === "date" ? this.props.dispatch(sortByDate()) : 
                    this.props.dispatch(sortByAmount());  
                    }
                    }>
                    <option value = "date">Date</option>
                    <option value = "amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange} 
                    numberOfMonths={1} 
                    isOutsideRange={() => false}
                    showClearDates={true}       
                    />
                </div>
            </div>           
    </div>    
        );
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);