import api from "@/api/users/user"

interface CreateUserDTO {
    username: string,
    email: string,
    password: string,
    bio?: string | null;
}

class UserService {
    static async createUser(userData: CreateUserDTO) {
        try {
            const response = await api.post("/user", userData);
            return response.data

        } catch (error: any) {
            throw new Error("Erro ao criar usuário:", error.response?.data || error.message);
        }
    };

}

export default UserService