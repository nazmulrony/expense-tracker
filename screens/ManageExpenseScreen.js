import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";

const ManageExpenseScreen = ({ route, navigation }) => {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense",
        });
    }, [isEditing, navigation]);

    function deleteExpenseHandler() {
        navigation.goBack();
    }
    function cancelHandler() {
        navigation.goBack();
    }
    function confirmHandler() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Button
                    style={styles.button}
                    onPress={cancelHandler}
                    mode="flat"
                >
                    Cancel
                </Button>
                <Button style={styles.button} onPress={confirmHandler}>
                    {isEditing ? "Update" : "Add"}
                </Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        size={36}
                        icon={"trash"}
                        color={GlobalStyles.colors.error500}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center",
    },
});
