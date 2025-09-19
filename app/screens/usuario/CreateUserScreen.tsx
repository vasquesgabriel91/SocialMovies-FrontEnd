import React, { useState } from "react";
import InputField from "@/components/InputField";
import CustomButton from "@/components/user/CustomButton";
import useCreateUser from "@/hooks/user/useCreateUser";
import { View, Text, Alert, ScrollView, StyleSheet } from "react-native";

const CreateUserScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const { createUser, loading } = useCreateUser();

  const handleSubmit = async () => {
    try {
      const data = { username, email, password, bio: bio || null };
      const result = await createUser(data);
      Alert.alert("Sucesso", `Usuário ${result.username} criado!`);
      setUsername(""); setEmail(""); setPassword(""); setBio("");
    } catch (err: any) {
      Alert.alert("Erro", err || "Não foi possível criar usuário");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Criar Usuário</Text>
      <InputField label="Username" value={username} onChangeText={setUsername} placeholder="Digite o username" />
      <InputField label="Email" value={email} onChangeText={setEmail} placeholder="Digite o email" />
      <InputField label="Senha" value={password} onChangeText={setPassword} placeholder="Digite a senha" secureTextEntry />
      <InputField label="Bio" value={bio} onChangeText={setBio} placeholder="Digite sua bio" />

      <CustomButton title={loading ? "Criando..." : "Criar Usuário"} onPress={handleSubmit} disabled={loading} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 20, fontWeight: "bold", textAlign: "center" },
});

export default CreateUserScreen;
