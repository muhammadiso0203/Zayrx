import { request } from "@/config/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateServiceCategory = () => {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["category"],
        mutationFn: (data: any) => {
            return request.post("/category", data).then((res) => res.data);
        },
        onSuccess: () => {
            toast.success("Service category created successfully");
            client.invalidateQueries({ queryKey: ["category"] });
        },
        onError: (err) => {
            toast.error("Failed to create service category");
            console.error(err);
        }
    });
};
