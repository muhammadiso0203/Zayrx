import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Popup = ({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    if (!open) return null;

    return (
        <div className="min-h-screen fixed inset-0 z-50 flex items-center justify-center bg-black/10">
            <div className="absolute w-125 h-200 rounded-xl bg-white p-6 shadow-lg top-20 right-10">

                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Update User</h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-xl text-gray-500"
                    >
                        ✕
                    </button>
                </div>
                <hr className="mb-3"/>
                <div className="mb-5">
                    <label className="text-sm font-medium flex items-start">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 w-full rounded-lg border px-3 py-2 outline-none"
                    />
                </div>

                <div className="mb-5">
                    <label className="text-sm font-medium flex items-start">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        value={email}
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full rounded-lg border px-3 py-2 outline-none"
                    />
                </div>

                <div className="mb-6">
                    <label className="text-sm font-medium flex items-start">
                        Role <span className="text-red-500">*</span>
                    </label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Manager" />
                        </SelectTrigger>
                        <SelectContent side="bottom">
                            <SelectGroup>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="manager">Manager</SelectItem>
                                <SelectItem value="staff">Staff</SelectItem>
                                <SelectItem value="customer">Customer</SelectItem>

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="mb-85">
                    <label className="text-sm font-medium flex items-start">
                        Permission <span className="text-red-500">*</span>
                    </label>

                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="View Bookings" />
                        </SelectTrigger>
                        <SelectContent side="bottom">
                            <SelectGroup>
                                <SelectItem value="view bookings">View Bookings</SelectItem>
                                <SelectItem value="view payments">View Payments</SelectItem>

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
        <hr className="mb-3"/>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-lg border px-4 py-2 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button onClick={() => setOpen(false)} className="rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white cursor-pointer">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Popup;