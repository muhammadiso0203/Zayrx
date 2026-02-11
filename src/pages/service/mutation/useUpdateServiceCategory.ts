import { request } from "@/config/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateServiceCategory = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: number | string; data: any }) => {
            return request.patch(`/category/${id}`, data).then((res) => res.data);
        },
        onSuccess: () => {
            toast.success("Service category updated successfully");
            client.invalidateQueries({ queryKey: ["category"] });
        },
        onError: (err) => {
            toast.error("Failed to update service category");
            console.error(err);
        }
    });
};
