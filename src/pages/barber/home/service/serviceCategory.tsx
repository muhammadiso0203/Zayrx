
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useCreateServiceCategory, useGetServiceCategory, useDeleteServiceCategory, useUpdateServiceCategory } from "../../service/hooks/useService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    AlertDialog,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const ServiceCategory = () => {
    const { data, isLoading } = useGetServiceCategory();
    const { mutate: createCategory, isPending: isCreating } = useCreateServiceCategory();
    const { mutate: updateCategory, isPending: isUpdating } = useUpdateServiceCategory();
    const { mutate: deleteCategory } = useDeleteServiceCategory();

    const [open, setOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState<any>(null);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });
    const isPending = isCreating || isUpdating;

    // Static demo category
    const demoCategory = {
        id: 1,
        name: "Soch olish",
        description: "Barcha turdagi soch olish xizmatlari"
    };

    // Combine demo category with real categories
    const allCategories = data?.data?.length > 0 ? data.data : [demoCategory];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingCategory) {
            updateCategory({ id: editingCategory.id, data: formData }, {
                onSuccess: () => {
                    setOpen(false);
                    setFormData({ name: "", description: "" });
                    setEditingCategory(null);
                }
            });
        } else {
            createCategory(formData, {
                onSuccess: () => {
                    setOpen(false);
                    setFormData({ name: "", description: "" });
                }
            });
        }
    };

    const handleEditClick = (category: any) => {
        setEditingCategory(category);
        setFormData({
            name: category.name,
            description: category.description || "",
        });
        setOpen(true);

    };

    const handleAddClick = () => {
        setEditingCategory(null);
        setFormData({ name: "", description: "" });
        setOpen(true);
    };

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Service Categories</h1>
                    <p className="text-muted-foreground">
                        Manage your service categories here.
                    </p>
                </div>
                <Dialog open={open} onOpenChange={setOpen}>
                    <Button onClick={handleAddClick} className="bg-amber-500 hover:bg-amber-600">
                        <Plus className="mr-2 h-4 w-4" /> Add Category
                    </Button>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{editingCategory ? "Edit Category" : "Add New Category"}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    placeholder="Category Name"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({ ...formData, description: e.target.value })
                                    }
                                    placeholder="Category description"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-amber-500 hover:bg-amber-600"
                                disabled={isPending}
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    "Save Category"
                                )}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allCategories?.map((category: any) => (
                        <Card key={category.id} className="hover:shadow-md transition-shadow relative group">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {category.name}
                                </CardTitle>
                                <div className="flex gap-2">
                                    <Button
                                        onClick={() => handleEditClick(category)}
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button onClick={() => deleteCategory(category.id)} variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </AlertDialogTrigger>
                                    </AlertDialog>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-xs text-muted-foreground mt-1 whitespace-normal wrap-break-word">
                                    {category.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                    {(!allCategories || allCategories.length === 0) && (
                        <div className="col-span-full text-center py-10 text-muted-foreground">
                            No categories found. Please add Category
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ServiceCategory;