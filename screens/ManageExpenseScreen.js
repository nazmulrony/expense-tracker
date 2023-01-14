import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const ManageExpenseScreen = ({ route, navigation }) => {
    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [isEditing, navigation])


    return (
        <View>
            <Text>Manage Expense Screen </Text>
        </View>
    );
};

export default ManageExpenseScreen;
