import { request } from "@/config/config";
import { useQuery } from "@tanstack/react-query";

export const useGetServiceCategory = () => {
    return useQuery({
        queryKey: ["category"],
        queryFn: () => request.get("/category").then((res) => res.data),
    });
};
