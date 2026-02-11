import { request } from "@/config/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateProfile = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: (data: any) => {
            return request.post('/barber-profiles', data).then((res) => res.data)
        },
        onSuccess: () => {
            toast.success("Profile created successfully");
            client.invalidateQueries({ queryKey: ["profile"] });
        },
        onError: (err) => {
            toast.error("Failed to create profile");
            console.error(err);
        }
    });
};
