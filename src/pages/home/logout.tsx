import { LogOut } from 'lucide-react';

interface LogoutPopupProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    onConfirm?: () => void;
}

const LogoutPopup = ({ open, setOpen, onConfirm }: LogoutPopupProps) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <div
                className="bg-white rounded-[32px] w-full max-w-[440px] p-8 shadow-2xl flex flex-col items-center text-center animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-100/40 flex items-center justify-center">
                            <LogOut className="w-7 h-7 text-[#ef4444]" />
                        </div>
                    </div>
                </div>

                <h2 className="text-[28px] font-bold text-gray-900 mb-3">Logout</h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                    Are you sure want to Logout to Captain?
                </p>

                <div className="flex gap-4 w-full">
                    <button
                        onClick={() => setOpen(false)}
                        className="flex-1 px-6 py-4 border-2 border-gray-100 rounded-[10px] font-bold text-gray-600 hover:bg-gray-50 hover:border-gray-200 transition-all duration-200 cursor-pointer text-base"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            if (onConfirm) onConfirm();
                            setOpen(false);
                        }}
                        className="flex-1 px-6 py-4 bg-[#e11d48] hover:bg-[#be123c] rounded-[10px] font-bold text-white shadow-xl shadow-red-200 transition-all duration-200 cursor-pointer text-base"
                    >
                        Yes, Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutPopup;
