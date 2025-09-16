import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, disabled }) => (
    <TouchableOpacity
        style={[styles.button, disabled && { backgroundColor: "#ccc" }]}
        onPress={onPress}
        disabled={disabled}
    >
    <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: { backgroundColor: "#007bff", padding: 15, borderRadius: 8, alignItems: "center", marginVertical: 5 },
    text: { color: "#fff", fontWeight: "bold" },
});

export default CustomButton;