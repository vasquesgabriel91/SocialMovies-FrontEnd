import React, { useState } from "react";
import InputField from "@/components/inputField";
import CustomButton from "@/components/user/CustomButton";
import useCreateUser from "@/hooks/user/user";
import { View, Text, Alert, ScrollView, StyleSheet } from "react-native";

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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Criar Usuário</Text>
      <InputField label="Username" value={username} onChangeText={setUsername} placeholder="Digite o username" />
      <InputField label="Email" value={email} onChangeText={setEmail} placeholder="Digite o email" />
      <InputField label="Senha" value={password} onChangeText={setPassword} placeholder="Digite a senha" secureTextEntry />

      <CustomButton title={loading ? "Criando..." : "Criar Usuário"} onPress={handleSubmit} disabled={loading} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 20, fontWeight: "bold", textAlign: "center" },
});

export default CreateUserScreen;
