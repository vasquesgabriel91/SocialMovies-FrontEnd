import React, { useState } from "react";
import InputField from "@/components/inputField";
import CustomButton from "@/components/user/CustomButton";
import useCreateUser from "@/hooks/user/user";
import styles from "./style";
import { View, Text, Alert, ScrollView, StyleSheet, ImageBackground } from "react-native";

const CreateUserScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser, loading } = useCreateUser();

  const handleSubmit = async () => {
    try {
      const data = { username, email, password };
      const result = await createUser(data);
      Alert.alert("Sucesso", `Usuário ${result.username} criado!`);
      setUsername(""); setEmail(""); setPassword("");
    } catch (err: any) {
      Alert.alert("Erro", err.message || "Não foi possível criar usuário");
    }
  };

  return (
    <ImageBackground source={require("../../assets/background.jpg")} style={{ flex: 1 }} blurRadius={5}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBorderContainer}>
          <Text style={styles.title}>Criar Usuário</Text>
          <InputField label="Username" value={username} onChangeText={setUsername} placeholder="Digite o username" />
          <InputField label="Email" value={email} onChangeText={setEmail} placeholder="Digite o email" />
          <InputField label="Senha" value={password} onChangeText={setPassword} placeholder="Digite a senha" secureTextEntry />
          <CustomButton title={loading ? "Criando..." : "Criar Usuário"} onPress={handleSubmit} disabled={loading} />
        </View>
      </ScrollView>
    </ImageBackground>

  );
};



export default CreateUserScreen;
