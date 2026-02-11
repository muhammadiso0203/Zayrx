import { request } from "@/config/config";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: () => request.get("/users/me").then((res) => res.data),
    });
};
