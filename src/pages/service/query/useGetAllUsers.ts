import { request } from "@/config/config"
import { useQuery } from "@tanstack/react-query"

export const useGetAllUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => {
            return request.get('/users').then((res) => res.data)
        }
    })
}