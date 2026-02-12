import { request } from "@/config/config"
import { useMutation } from "@tanstack/react-query"

export const useCreateBooking = () => {
    return useMutation({
        mutationFn: (data: { barberId: number | string, resourceId: [number, number], date: string, startTime: string }) => {
            return request.post('/booking', data).then((res) => res.data)
        }
    })
}