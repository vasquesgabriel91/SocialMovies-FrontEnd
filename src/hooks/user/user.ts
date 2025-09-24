    import { useState } from "react";
    import UserService from "@/services/user/UserService";

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
            } catch (err: any) {
                setError(err.message || "Erro desconhecido");
                setLoading(false);
                throw err;
            }
        }
        return { createUser, loading, error }
    }

    export default useCreateUser;