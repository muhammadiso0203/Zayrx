import { request } from "@/config/config"
import { useMutation, useQuery } from "@tanstack/react-query"

interface IPhone {
    phoneNumber: string
    password: string
}

interface IUpdateUser {
    id: string | number;
    phoneNumber?: string;
    password?: string;
    role?: string;
}

export const useGetAllUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => {
            return request.get('/users').then((res) => res.data)
        }
    })
}

export const useUpdateUser = () => {
    return useMutation({
        mutationFn: ({ id, ...data }: IUpdateUser) => {
            return request.patch(`/users/${id}`, data).then((res) => res.data)
        }
    })
}

export const useDeleteUser = () => {
    return useMutation({
        mutationFn: (id: string | number) => {
            return request.delete(`/users/${id}`).then((res) => res.data)
        }
    })
}

export const usePhone = () => {
    return useMutation({
        mutationFn: (data: IPhone) => {
            return request.post('/auth/login', data).then((res) => res.data)
        }
    })
}
