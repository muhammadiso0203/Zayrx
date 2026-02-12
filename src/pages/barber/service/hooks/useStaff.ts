import { request } from "@/config/config"
import { useMutation } from "@tanstack/react-query"

interface IRegisterStaff {
    phoneNumber: string;
    password: string;
    role: string
}

export const useRegisterStaff = () => {
    return useMutation({
        mutationFn: (data: IRegisterStaff) => {
            return request.post('auth/registration/staff', data).then((res) => res.data)
        }
    })
}
