import { request } from "@/config/config";
import { useQuery } from "@tanstack/react-query";

export const useGetResources = (params: { search?: string; page?: number; limit?: number }) => {
    return useQuery({
        queryKey: ["resources", params],
        queryFn: () => request.get("/resource", { params }).then((res) => res.data),
    });
};
