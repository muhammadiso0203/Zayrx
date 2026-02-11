import { request } from "@/config/config"
import { useMutation } from "@tanstack/react-query"

interface IUpdateUser {
    id: string | number;
    phoneNumber?: string;
    password?: string;
    role?: string;
}

export const useUpdateUser = () => {
    return useMutation({
        mutationFn: ({ id, ...data }: IUpdateUser) => {
            return request.patch(`/users/${id}`, data).then((res) => res.data)
        }
    })
}
