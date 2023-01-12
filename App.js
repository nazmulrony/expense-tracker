import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import RecentExpenseScreen from "./screens/RecentExpenseScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen
                name="RecentExpenses"
                component={RecentExpenseScreen}
            />
            <BottomTabs.Screen
                name="AllExpenses"
                component={AllExpensesScreen}
            />
        </BottomTabs.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="ExpensesOverview"
                        component={ExpensesOverview}
                    />
                    <Stack.Screen
                        name="ManageExpense"
                        component={ManageExpenseScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
