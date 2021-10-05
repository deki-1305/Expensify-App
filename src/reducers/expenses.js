// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': return [...state, action.expense];
        case 'REMOVE_EXPENSE': return state.filter( ({id}) => {return id !== action.id} );
        case 'EDIT_EXPENSE': return state.map ( (expense) => {
            if (expense.id === action.id) {return {...expense, ...action.updates}}
            else {return expense;};
        });
        case 'SET_EXPENSES': return action.expenses;
        default: return state;
    }
};

export default expensesReducer;

// reducer je f-ja koja uzima pocetni state i actions objekat(govori sta se radi), odlucuje
// kako da se update=uje state i izbacuje novi promenjeni state
// On je kao neki event listener koji obradjuje dogadjaje u zavisnosti od action type-a
// reducer ne menja postojeci state,on kopira state, pravi izmene i vraca ga kao novi state
// action je u stvari addExpense, removeExpense... 