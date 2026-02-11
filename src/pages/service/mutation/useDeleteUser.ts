import { request } from "@/config/config"
import { useMutation } from "@tanstack/react-query"

export const useDeleteUser = () => {
    return useMutation({
        mutationFn: (id: string | number) => {
            return request.delete(`/users/${id}`).then((res) => res.data)
        }
    })
}
