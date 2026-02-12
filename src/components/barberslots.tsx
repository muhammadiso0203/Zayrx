import { useAvailableSlote } from "@/pages/client/service/hooks/useUser";

interface BarberSlotsProps {
    barberId: number | string;
    today: string;
    selectedBarber: number | string | undefined;
    selectTime: string | null;
    onSelect: (time: string, barberId: number | string) => void;
}

const BarberSlots = ({ barberId, today, selectedBarber, selectTime, onSelect }: BarberSlotsProps) => {
    const { data: availableSlote, isLoading } = useAvailableSlote({ barberId, date: today });
    
    if (isLoading) return <div className="text-neutral-400 text-xs italic">Yuklanmoqda...</div>;

    return (
        <div>
            <p className="text-neutral-500 text-sm mb-3">Vaqtni tanlang bugunga:</p>
            <div className="grid grid-cols-6 gap-2">
                {availableSlote?.data?.map((time: any) => (
                    <button
                        key={time}
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelect(time, barberId);
                        }}
                        className={`px-4 py-2 text-sm font-medium rounded-[10px] ${selectTime === time && selectedBarber === barberId ? "bg-black text-white" : "bg-gray-200 text-neutral-900"
                            }`}
                    >
                        {time}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BarberSlots;