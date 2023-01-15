import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A pair of shoes",
        amount: 89.99,
        date: new Date("2023-01-13"),
    },
    {
        id: "e2",
        description: "A pair of sunglasses",
        amount: 19.99,
        date: new Date("2022-01-01"),
    },
    {
        id: "e3",
        description: "A new phone",
        amount: 350,
        date: new Date("2022-07-12"),
    },
    {
        id: "e4",
        description: "A pair shocks",
        amount: 14.59,
        date: new Date("2022-02-21"),
    },
    {
        id: "e5",
        description: "A office bag",
        amount: 110.49,
        date: new Date("2023-01-10"),
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, { description, amount, date }) => {},
});
function expenseReducer(state, action) {
    switch (action.type) {
        //add action
        case "ADD":
            const id = new Date().toString() + Math.random().toString();
            return [{ id: id, ...action.payload }, ...state];
        //update action
        case "UPDATE":
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = {
                ...updatableExpense,
                ...action.payload.data,
            };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        //delete action
        case "DELETE":
            const updatedState = state.filter(
                (expense) => expense.id !== action.payload
            );
            return updatedState;
        default:
            return state;
    }
}
const ExpensesContextProvider = ({ children }) => {
    const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);
    //add expense function
    function addExpense(expenseData) {
        dispatch({ type: "ADD", payload: expenseData });
    }
    //delete expense function
    function deleteExpense(id) {
        dispatch({ type: "DELETE", payload: id });
    }
    //update expense function
    function updateExpense(id, expenseData) {
        dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
    }
    const value = {
        expenses: expenseState,
        addExpense,
        updateExpense,
        deleteExpense,
    };
    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
};

export default ExpensesContextProvider;
