import { useMutation } from "@tanstack/react-query"
import { request } from "../../../config/config"

interface IPhone {
    phoneNumber: string
    password: string
}

export const usePhone = () => {
    return useMutation({
        mutationFn: (data: IPhone) => {
            return request.post('/auth/login', data).then((res) => res.data)
        }
    })
}