import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: { 
        display: "flex", 
        flexDirection: "column", 
        flex: 1,              
        justifyContent: "flex-end" 
    },
    title: { 
        fontSize: 24, 
        marginBottom: 20, 
        fontWeight: "bold", 
        textAlign: "center" 
    },
    topBorderContainer: {
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        padding: 20,
        marginBottom: 20,
        backgroundColor: "#e0e1dd",
        height: "70%"
    },
});
