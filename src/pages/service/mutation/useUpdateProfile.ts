import { request } from "@/config/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateProfile = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: ({ id, role, data }: { id: string | number, role: string, data: any }) => {
            const endpoint = role === 'barber' ? `/barber-profiles/${id}` : `/users/${id}`;
            return request.patch(endpoint, data).then((res) => res.data)
        },
        onSuccess: () => {
            toast.success("Profile updated successfully");
            client.invalidateQueries({ queryKey: ["profile"] });
        },
        onError: (err) => {
            toast.error("Failed to update profile");
            console.error(err);
        }
    });
};
