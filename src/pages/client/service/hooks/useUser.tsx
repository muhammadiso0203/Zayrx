import { request } from "@/config/config";
import { useMutation, useQuery } from "@tanstack/react-query";

interface IUserParams {
    role: string;
    search?: string;
    page?: number;
    limit?: number;
}

interface Iavailable {
    barberId: number | string | undefined;
    date: string;
}

interface IGuestBooking {
    barberId: number | string;
    guestName: string;
    guestPhone: string;
    resourceIds: number[];
    date: string;
    startTime: string;
}

export const useGetPublicUsers = (params: IUserParams) => {
    return useQuery({
        queryKey: ["public-users", params],
        queryFn: () => request.get("/users/public", { params }).then((res) => res.data),
    });
};

export const useAvailableSlote = (params: Iavailable) => {
    return useQuery({
        queryKey: ["available-slots", params],
        queryFn: () => request.get("/booking/available-slots", { params }).then((res) => res.data),
        enabled: params.barberId !== undefined && params.barberId !== null && Boolean(params.date),
    });
};

export const useCreateGuestBooking = () => {
    return useMutation({
        mutationFn: (data: IGuestBooking) =>
            request.post("/booking/guest", data).then((res) => res.data),
    });
};

