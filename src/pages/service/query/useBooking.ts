import { request } from "@/config/config"
import { useQuery } from "@tanstack/react-query"


export const useBooking = () => {
    return useQuery({
        queryKey: ['booking'],
        queryFn: () => {
            return request.get('/booking').then((res) => res.data.data)
        }
    })
}