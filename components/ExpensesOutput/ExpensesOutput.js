import React from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/style";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A pair of shoes",
        amount: 89.99,
        date: new Date("2021-12-01"),
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
        date: new Date("2022-2-21"),
    },
    {
        id: "e5",
        description: "A office bag",
        amount: 110.49,
        date: new Date("2023-01-10"),
    },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary
                expenses={DUMMY_EXPENSES}
                periodName={expensesPeriod}
            />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
});
