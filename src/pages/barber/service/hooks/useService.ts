import { request } from "@/config/config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// Service-Category


export const useGetServiceCategory = () => {
    return useQuery({
        queryKey: ["category"],
        queryFn: () => request.get("/category").then((res) => res.data),
    });
};

export const useCreateServiceCategory = () => {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["category"],
        mutationFn: (data: { name: string, description: string }) => {
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

export const useUpdateServiceCategory = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: number | string; data: { name: string, description: string } }) => {
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

// Service-Resource


export const useGetResources = (params: { search?: string; page?: number; limit?: number; barberId?: number | string }) => {
    return useQuery({
        queryKey: ["resources", params],
        queryFn: () => request.get("/resource", { params }).then((res) => res.data),
    });
};


export const useCreateResource = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: (data: { name: string; basePrice: number; description: string; categoryId: number; durationMinutes: number }) => {
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

export const useUpdateResource = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: number | string; data: { name: string; basePrice: number; description: string; categoryId: number; durationMinutes: number } }) => {
            return request.patch(`/resource/${id}`, data).then((res) => res.data);
        },
        onSuccess: () => {
            toast.success("Service updated");
            client.invalidateQueries({ queryKey: ["resources"] });
        },
        onError: (err) => {
            toast.error("Failed to update service");
            console.error(err);
        }
    });
}

export const useDeleteResource = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: (id: number | string) => {
            return request.delete(`/resource/${id}`).then((res) => res.data);
        },
        onSuccess: () => {
            toast.success("Service deleted");
            client.invalidateQueries({ queryKey: ["resources"] });
        },
        onError: (err) => {
            toast.error("Failed to delete service");
            console.error(err);
        }
    });
};

// Barber Service

export const useBarberService = (params: { barberId: number | string; page?: number; limit?: number }) => {
    return useQuery({
        queryKey: ["barber-service", { barberId: params.barberId }],
        queryFn: () => request.get("/barber-service", { params }).then((res) => res.data),
        enabled: !!params.barberId
    });
};