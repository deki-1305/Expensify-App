import uuid from 'uuid';  //ne treba vise za Firebase,ima svoj sa push sto dobije key
import database from '../firebase/firebase';

// 1.component calls action generator
// 2.action generator returns object
// 3.component dispatches object
// 4.redux store changes

// u povezivanju sa Firebase je asinhroni prenos i ide malo drugacije redosled:
// 1.component calls action generator
// 2.action generator returns function
// 3.component dispatches function (potreban modul redux-thunk)
// 4.function runs(i dispatchuje druge actions)

//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  });
  
  export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      const {description = '', note = '', amount = 0, createdAt = 0} = expenseData;
      const expense = { description, note, amount, createdAt };
        database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
        dispatch(addExpense({ id: ref.key, ...expense }) );
      });
    };
  };

//REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const startRemoveExpense = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).remove().then((ref) => {
        dispatch(removeExpense({id}));
      });
  }; //startRemoveExpense je uklanjanje podataka iz Firebase,a removeExpense samo iz Redux store
};

//EDIT_EXPENSE
export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
   return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
             id: childSnapshot.key,
             ...childSnapshot.val()
        });
      });
     dispatch(setExpenses(expenses));
    });
  };
};

// 1. Fetch all expense data once
// 2. Parse that data into an array
// 3. Dispatch SET_EXPENSES