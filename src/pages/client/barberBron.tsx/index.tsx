import { Star, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useGetPublicUsers } from "../service/hooks/useUser";
import BarberSlots from "@/components/barberslots";




const BarberBron = () => {
    const [selectedBarber, setSelectedBarber] = useState<number | string>();
    const [selectTime, setSelectTime] = useState<string | null>(null);
    const navigate = useNavigate();

    const today = new Date().toISOString().split('T')[0];
    const { data } = useGetPublicUsers({ role: 'barber' })



    const barbersWithProfile = data?.data?.filter((b: any) => !!b.barberProfile) || [];


    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-4">
            <div className="w-full max-w-md">
                <header className="flex items-center gap-4 mb-8">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2">
                        <ChevronLeft className="w-6 h-6" />
                        <p className="font-semibold text-[20px] ">Ortga </p>
                    </button>

                </header>

                <h1 className="text-2xl font-bold text-neutral-900 mb-8">Barber tanlang</h1>

                <div className="space-y-8">
                    <Select defaultValue={'all'}>
                        <SelectTrigger>
                            <SelectValue placeholder="Barber tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Barbers</SelectItem>
                            <SelectItem value="top">Top Barbers</SelectItem>
                        </SelectContent>
                    </Select>

                    {barbersWithProfile.map((barber: any) => (
                        <div key={barber.id} className="space-y-4 flex flex-col">
                            <div
                                onClick={() => setSelectedBarber(barber.id)}
                                className="flex items-center justify-between cursor-pointer group"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={barber.image}
                                        className="w-14 h-14 rounded-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-300"
                                        alt={barber.name}
                                    />
                                    <div>
                                        <h3 className="font-bold text-neutral-900">{barber.barberProfile?.fullName}</h3>
                                        <p className="text-neutral-400 text-sm">{barber.role}</p>


                                        <div className="flex gap-0.5">
                                            {data?.barberProfile?.ratingAvg.map((star: number) => (
                                                <Star
                                                    key={star}
                                                    className={`w-3 h-3 ${star <= barber.barberProfile?.ratingAvg ? "text-amber-400 fill-amber-400" : "text-neutral-200"}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-[11px] text-neutral-400">{barber.barberProfile?.ratingAvg ? `${barber.barberProfile?.ratingAvg || 0} reyting` : ""}</span>

                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedBarber === barber.id ? "border-black" : "border-neutral-200"
                                        }`}>
                                        {selectedBarber === barber.id && <div className="w-3 h-3 bg-black rounded-full" />}
                                    </div>
                                </div>
                            </div>

                            <BarberSlots
                                barberId={barber.id}
                                today={today}
                                selectedBarber={selectedBarber}
                                selectTime={selectTime}
                                onSelect={(time, bid) => {
                                    setSelectTime(time);
                                    setSelectedBarber(bid);
                                }}
                            />
                        </div>
                    ))}

                    <button
                        onClick={() => {
                            const selectedBarberData = barbersWithProfile.find((b: any) => b.id === selectedBarber);
                            navigate('/barber-service', {
                                state: {
                                    barberId: selectedBarber,
                                    time: selectTime,
                                    date: today,
                                    barberName: selectedBarberData?.barberProfile?.fullName,
                                    barberImage: selectedBarberData?.image
                                }
                            });
                        }}
                        disabled={!selectedBarber || !selectTime}
                        className={`w-full py-3 bg-black text-white rounded-full font-semibold ${!selectedBarber || !selectTime ? "cursor-not-allowed opacity-30" : "cursor-pointer"}`}
                    >
                        Davom etish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BarberBron;