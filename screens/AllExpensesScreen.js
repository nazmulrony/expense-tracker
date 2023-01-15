import { useContext } from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpensesScreen = () => {
    const { expenses } = useContext(ExpensesContext);
    // console.log(expenses);
    return <ExpensesOutput expensesPeriod={"Total"} expenses={expenses} />;
};

export default AllExpensesScreen;
