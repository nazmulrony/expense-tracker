import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { GlobalStyles } from "../../constants/style";

const Input = ({ label, textInputConfig, style }) => {
    const inputStyles = [styles.input];
    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }
    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput {...textInputConfig} style={inputStyles} />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
        marginHorizontal: 4,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4,
    },
    input: {
        color: GlobalStyles.colors.primary700,
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: "top",
    },
});
