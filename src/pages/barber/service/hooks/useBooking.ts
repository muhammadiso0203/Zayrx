import { request } from "@/config/config";
import { useQuery } from "@tanstack/react-query";

export const useBooking = (params: { search?: string; page?: number; limit?: number }) => {
    return useQuery({
        queryKey: ["booking", params],
        queryFn: () => request.get("/booking", { params }).then((res) => res.data.data),
    });
};
