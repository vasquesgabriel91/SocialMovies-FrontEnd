import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

interface InputFieldProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    label?: string;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChangeText, placeholder, secureTextEntry = false, label }) => {

    const output = <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
    </View>
    
    return output;
};

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    label: { marginBottom: 4, fontWeight: "bold" },
    input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8 },
})

export default InputField;