import { ChevronLeft, User, Phone, Calendar, Clock, Scissors } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { toast } from "sonner";
import { useCreateGuestBooking } from "../service/hooks/useUser";

const ClientPhone = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { barberId, time, date, barberName, barberImage, selectedServices } = location.state || {};

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const { mutate } = useCreateGuestBooking();
    const phoneRegex = /^\+998\d{9}$/;

    const handleBooking = () => {
        if (!phoneRegex.test(phoneNumber)) {
            toast.error("Telefon raqam noto'g'ri!");
            return;
        }

        const bookingData = {
            barberId: Number(barberId),
            resourceIds: selectedServices?.map((s: any) => Number(s.id)) || [],
            date: date || "",
            startTime: time || "",
            guestName: name,
            guestPhone: phoneNumber
        };

        console.log("Booking data:", bookingData);

        mutate(bookingData, {

            onSuccess: () => {
                toast.success('Muvaffaqiyatli band qilindi')
                navigate("/client");
            },
            onError: (error: any) => {
                toast.error(error?.message ?  'Nomalum xatolik yuz berdi' : error?.message)
            }
        })
    }

    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-4">
            <div className="w-full max-w-md">
                <header className="flex items-center gap-4 mb-8">
                    <button onClick={() => navigate(-1)} className="p-1 flex items-center gap-2">
                        <ChevronLeft className="w-6 h-6 text-neutral-800" />
                        <h2 className="font-bold text-[20px]">Ortga</h2>
                    </button>
                </header>

                <h1 className="text-2xl font-bold text-neutral-900 mb-8 font-jakarta">Ma'lumotlarni kiriting</h1>

                <div className="bg-neutral-50 rounded-[32px] p-6 mb-8 space-y-6">
                    <div className="flex items-center gap-4">
                        <img src={barberImage} className="w-14 h-14 rounded-full object-cover" alt="Barber" />
                        <div>
                            <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Barber</p>
                            <h3 className="font-bold text-neutral-900">{barberName}</h3>
                        </div>
                    </div>
                    <hr />
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-neutral-400">
                            <Scissors className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-neutral-400 font-bold uppercase">Xizmatlar</p>
                            <div className="space-y-4 mt-1">
                                {selectedServices?.map((service: any) => (
                                    <div key={service.id} className="flex items-center gap-2">
                                        <h3 className="font-bold text-neutral-900 ">{service.name}</h3>
                                        <p className="text-neutral-900 font-bold text-sm">{service.basePrice} UZS</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-neutral-400">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Vaqt</p>
                            <h3 className="font-bold text-neutral-900">{date || "Sana tanlanmagan"}</h3>
                            <div className="flex items-center gap-1 text-neutral-500 mt-1">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm font-medium">{time || "Vaqt tanlanmagan"}</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="space-y-4">
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-300" />
                        <input
                            type="text"
                            placeholder="Ismingiz"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-[16px] placeholder:text-neutral-300"
                        />
                    </div>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-300" />
                        <input
                            type="tel"
                            placeholder="Telefon raqamingiz"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-[16px] placeholder:text-neutral-300"
                        />
                    </div>
                </div>

                <div className="mt-12 mb-10">
                    <button
                        onClick={() => handleBooking()}
                        disabled={!name || !phoneNumber}
                        className={`w-full py-4 bg-black text-white rounded-full font-bold text-lg ${!name || !phoneNumber ? "opacity-30 cursor-not-allowed" : ""} transition-all shadow-xl shadow-black/10 active:scale-95`}
                    >
                        Qabulga yozilish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClientPhone;