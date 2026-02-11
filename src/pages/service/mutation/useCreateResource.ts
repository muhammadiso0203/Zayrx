import { request } from "@/config/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateResource = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: (data: any) => {
            return request.post("/resource", data).then((res) => res.data);
        },
        onSuccess: () => {
            toast.success("Service created successfully");
            client.invalidateQueries({ queryKey: ["resources"] });
        },
        onError: (err) => {
            toast.error("Failed to create service");
            console.error(err);
        }
    });
};
