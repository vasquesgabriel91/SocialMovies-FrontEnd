import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Sobre() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ℹ️ Página Sobre</Text>
      <Button
        title="Ir para Criar Usuário"
        onPress={() => router.push("/user/CreateUser")}
      />
    </View>
  );
}
