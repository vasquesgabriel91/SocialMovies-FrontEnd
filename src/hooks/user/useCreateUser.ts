import { useState } from "react";
import UserService from "@/services/users/UserService";

interface CreateUserInput {
    username: string;
    email: string;
    password: string;
    bio?: string | null;
}

const useCreateUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createUser = async (data: CreateUserInput) => {
        setLoading(true);
        setError(null);

        try {
            const response = await UserService.createUser(data);
            setLoading(false);
            return response;
        } catch (error: any) {
            setError(error.message || "Erro desconhecido");
        }
    }
}