import { request } from "@/config/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteServiceCategory = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: (id: number | string) => {
            return request.delete(`/category/${id}`).then((res) => res.data);
        },
        onSuccess: () => {
            toast.success("Service category deleted successfully");
            client.invalidateQueries({ queryKey: ["category"] });
        },
        onError: (err) => {
            toast.error("Failed to delete service category");
            console.error(err);
        }
    });
};
