import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Popup = ({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) => {

    if (!open) return null;

    return (
        <div className="min-h-screen fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="absolute w-[500px] h-[800px] rounded-xl bg-white p-6 shadow-lg top-20 right-10">

                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Create New Service</h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-200"
                    >
                        ✕
                    </button>

                </div>
                <hr className="mb-3" />
                <div className="mb-5">
                    <label className="text-sm font-medium flex items-start">
                        Service Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        className="mt-1 w-full rounded-lg border px-3 py-2 outline-none"
                    />
                </div>

                <div className="mb-5">
                    <label className="text-sm font-medium flex items-start">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        minLength={20}
                        maxLength={100}
                        rows={4}
                        className="mt-1 w-full rounded-lg border px-3 py-2 outline-none max-h-40"
                    />
                </div>

                <div className="mb-6">
                    <label className="text-sm font-medium flex items-start">
                        Price <span className="text-red-500">*</span>
                    </label>
                    <input type="text" className="mt-1 w-full rounded-lg border px-3 py-2 outline-none" />
                </div>

                <div>
                    <label className="text-sm font-medium flex items-start">
                        Duration <span className="text-red-500">*</span>
                    </label>

                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="45 minutes" />
                        </SelectTrigger>
                        <SelectContent side="bottom">
                            <SelectGroup>
                                <SelectItem value="30 minutes">30 minutes</SelectItem>
                                <SelectItem value="45 minutes">45 minutes</SelectItem>
                                <SelectItem value="1 hours">1 hours</SelectItem>
                                <SelectItem value="2 hours">2 hours</SelectItem>

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <hr className="absolute bottom-20 w-113" />
                <div className="absolute bottom-5 right-4 flex justify-end gap-3">
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