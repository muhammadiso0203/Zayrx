import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useGetServiceCategory, useCreateResource, useUpdateResource } from "../../service/hooks/useService";
import { Loader2 } from "lucide-react";

const Popup = ({ open, setOpen, editingService, setEditingService }: { open: boolean, setOpen: (open: boolean) => void, editingService: any, setEditingService: (val: any) => void }) => {
    const { data: categoriesData } = useGetServiceCategory();
    const { mutate: createService, isPending: isCreating } = useCreateResource();
    const { mutate: updateService, isPending: isUpdating } = useUpdateResource();

    const isPending = isCreating || isUpdating;

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        categoryId: "",
        durationMinutes: "",
        basePrice: ""
    });

    useEffect(() => {
        if (editingService) {
            setFormData({
                name: editingService.name || "",
                description: editingService.description || "",
                categoryId: editingService.category?.id?.toString() || "",
                durationMinutes: editingService.durationMinutes?.toString() || "",
                basePrice: editingService.basePrice?.toString() || ""
            });
        } else {
            setFormData({
                name: "",
                description: "",
                categoryId: "",
                durationMinutes: "",
                basePrice: ""
            });
        }
    }, [editingService, open]);

    if (!open) return null;

    const handleSubmit = () => {
        const payload = {
            name: formData.name,
            description: formData.description,
            categoryId: Number(formData.categoryId),
            durationMinutes: Number(formData.durationMinutes),
            basePrice: Number(formData.basePrice)
        };

        if (editingService) {
            updateService({ id: editingService.id, data: payload }, {
                onSuccess: () => {
                    handleClose();
                }
            });
        } else {
            createService(payload, {
                onSuccess: () => {
                    handleClose();
                }
            });
        }
    };

    const handleClose = () => {
        setOpen(false);
        setEditingService(null);
        setFormData({
            name: "",
            description: "",
            categoryId: "",
            durationMinutes: "",
            basePrice: ""
        });
    }

    return (
        <div className="min-h-screen fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="relative w-full max-w-[500px] h-fit max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{editingService ? "Edit Service" : "Create New Service"}</h2>
                    <button
                        onClick={handleClose}
                        className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                        ✕
                    </button>
                </div>
                <hr className="mb-3" />

                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium flex items-start mb-1">
                            Category <span className="text-red-500 ml-1">*</span>
                        </label>
                        <Select
                            value={formData.categoryId}
                            onValueChange={(value) => setFormData({ ...formData, categoryId: value })}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {categoriesData?.data?.map((cat: any) => (
                                        <SelectItem key={cat.id} value={cat.id.toString()}>
                                            {cat.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="text-sm font-medium flex items-start mb-1">
                            Service Name <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full h-[35px] rounded-lg border px-3 py-2 outline-none"
                            placeholder="Service name"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium flex items-start mb-1">
                            Description <span className="text-red-500 ml-1">*</span>
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows={3}
                            className="w-full rounded-lg border px-3 py-2 outline-none max-h-40"
                            placeholder="Description (min 20 characters)"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium flex items-start mb-1">
                                Price <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="number"
                                value={formData.basePrice}
                                onChange={(e) => setFormData({ ...formData, basePrice: e.target.value })}
                                className="w-full h-[35px] rounded-lg border px-3 py-2 outline-none"
                                placeholder="Base Price"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium flex items-start mb-1">
                                Duration (Min) <span className="text-red-500 ml-1">*</span>
                            </label>
                            <Select
                                value={formData.durationMinutes}
                                onValueChange={(value) => setFormData({ ...formData, durationMinutes: value })}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a duration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="15">15 Minutes</SelectItem>
                                        <SelectItem value="30">30 Minutes</SelectItem>
                                        <SelectItem value="45">45 Minutes</SelectItem>
                                        <SelectItem value="60">60 Minutes</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-gray-100">
                    <button
                        onClick={handleClose}
                        className="rounded-lg border px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isPending || !formData.name || !formData.categoryId}
                        className="rounded-lg bg-yellow-500 px-6 py-2 font-medium text-white hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Popup;