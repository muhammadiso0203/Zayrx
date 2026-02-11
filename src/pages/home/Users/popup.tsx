import { useRegisterStaff } from "@/pages/service/mutation/useRegisterStaff";
import { useUpdateUser } from "@/pages/service/mutation/useUpdateUser";
import { useQueryClient } from "@tanstack/react-query";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface PopupProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    data?: any;
}

const Popup = ({ open, setOpen, data }: PopupProps) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const { mutate: register, isPending: isRegistering } = useRegisterStaff();
    const { mutate: update, isPending: isUpdating } = useUpdateUser();
    const client = useQueryClient();

    useEffect(() => {
        if (data) {
            setPhoneNumber(data.phoneNumber || data.phone || "");
            setPassword("");
        } else {
            setPhoneNumber("");
            setPassword("");
        }
    }, [data, open]);

    const handleSubmit = () => {
        if (data) {
            update(
                {
                    id: data.id,
                    phoneNumber,
                    password: password || undefined,
                },
                {
                    onSuccess: () => {
                        toast.success("Foydalanuvchi muvaffaqiyatli yangilandi", { position: "top-right" });
                        client.invalidateQueries({ queryKey: ["users"] });
                        setOpen(false);
                    },
                    onError: () => {
                        toast.error("Foydalanuvchini yangilashda xatolik", { position: "top-right" });
                    },
                }
            );
        } else {
            register(
                {
                    phoneNumber,
                    password,
                    role: "admin",
                },
                {
                    onSuccess: () => {
                        toast.success("Admin muvaffaqiyatli yaratildi", { position: "top-right" });
                        client.invalidateQueries({ queryKey: ["users"] });
                        setOpen(false);
                    },
                    onError: () => {
                        toast.error("Admin yaratishda xatolik yuz berdi", { position: "top-right" });
                    },
                }
            );
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="relative w-[420px] rounded-2xl bg-white p-6 animate-in fade-in zoom-in">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {data ? "Xodimni tahrirlash" : "Yangi xodim qo'shish"}
                    </h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
                    >
                        ✕
                    </button>
                </div>

                <div className="mb-4">
                    <label className="mb-1 text-sm font-medium text-gray-700 flex items-center">
                        Telefon raqami <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+998 xx xxx xx xx"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-yellow-500"
                    />
                </div>

                <div className="mb-6 relative">
                    <label className="mb-1 flex items-center text-sm font-medium text-gray-700">
                        Parol {data ? <span className="text-xs text-gray-400 ml-2">(o'zgartirish shart emas)</span> : <span className="text-red-500 ml-1">*</span>}
                    </label>
                    <input
                        type={show ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={data ? "Yangi parol (ixtiyoriy)" : "••••••••"}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-yellow-500"
                    />
                    <button
                        onClick={() => setShow(!show)}
                        className="absolute right-1 top-7.5 h-6 w-6 text-gray-400"
                    >
                        {show ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </button>
                </div>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-lg border border-gray-300 px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                        Bekor qilish
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isRegistering || isUpdating}
                        className="rounded-lg bg-yellow-500 px-5 py-2 text-sm font-medium text-white transition disabled:opacity-50 hover:bg-yellow-600"
                    >
                        {isRegistering || isUpdating ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : data ? (
                            "Saqlash"
                        ) : (
                            "Qo'shish"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;

