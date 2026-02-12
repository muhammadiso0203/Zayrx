import { ChevronLeft, Scissors, Check } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useBarberService } from "../../barber/service/hooks/useService";

const BarberService = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { barberId, time, date, barberName, barberImage } = location.state || {};

    const [selectedServices, setSelectedServices] = useState<any[]>([]);
    const { data: servicesData, isLoading } = useBarberService({ barberId });
    console.log(servicesData);



    const toggleService = (service: any) => {
        setSelectedServices(prev =>
            prev.find(s => s.id === service.id)
                ? prev.filter(s => s.id !== service.id)
                : [...prev, service]
        );
    };

    const handleContinue = () => {
        navigate("/client-phone", {
            state: {
                barberId,
                time,
                date,
                barberName,
                barberImage,
                selectedServices
            }
        });
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-4">
            <div className="w-full max-w-md">
                <header className="flex items-center gap-4 mb-8">
                    <button onClick={() => navigate(-1)} className="p-1 flex items-center gap-2">
                        <ChevronLeft className="w-6 h-6 text-neutral-800" />
                        <h2 className="font-bold text-[20px]">Ortga</h2>
                    </button>
                </header>

                <h1 className="text-2xl font-bold text-neutral-900 mb-2 font-jakarta">Xizmatlarni tanlang</h1>
                <p className="text-neutral-500 mb-8">O'zingizga kerakli xizmatlarni belgilang</p>

                <div className="space-y-4 mb-24">
                    {isLoading ? (
                        <div className="flex justify-center py-10">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
                        </div>
                    ) : servicesData?.data && servicesData.data.length > 0 ? (
                        servicesData.data.map((barberService: any) => {
                            const service = {
                                id: barberService.resource.id,
                                name: barberService.resource.name,
                                durationMinutes: barberService.resource.durationMinutes,
                                basePrice: barberService.customPrice || barberService.resource.basePrice
                            };
                            const isSelected = selectedServices.find(s => s.id === service.id);
                            return (
                                <div
                                    key={service.id}
                                    onClick={() => toggleService(service)}
                                    className={`p-5 rounded-[24px] border-2 transition-all cursor-pointer flex items-center justify-between ${isSelected ? "border-black bg-neutral-50" : "border-neutral-100"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isSelected ? "bg-black text-white" : "bg-neutral-100 text-neutral-400"
                                            }`}>
                                            <Scissors className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-neutral-900">{service.name}</h3>
                                            <p className="text-sm text-neutral-500">{service.durationMinutes} daqiqa</p>
                                        </div>
                                    </div>
                                    <div className="text-right flex items-center gap-3">
                                        <span className="font-bold text-neutral-900">{service.basePrice.toLocaleString()} UZS</span>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? "border-black bg-black" : "border-neutral-200"
                                            }`}>
                                            {isSelected && <Check className="w-4 h-4 text-white" />}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <Scissors className="w-16 h-16 text-neutral-300 mb-4" />
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">Xizmatlar topilmadi</h3>
                            <p className="text-neutral-500">Bu barber uchun hali xizmatlar qo'shilmagan</p>
                        </div>
                    )}
                </div>

                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-neutral-100 flex justify-center">
                    <div className="w-full max-w-md">
                        <button
                            onClick={handleContinue}
                            disabled={selectedServices.length === 0}
                            className={`w-full py-4 bg-black text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-black/10 active:scale-95 ${selectedServices.length === 0 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                                }`}
                        >
                            Davom etish ({selectedServices.length})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarberService;
