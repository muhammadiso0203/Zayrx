import { Users, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

const Client = () => {
    const navigate = useNavigate();

    const menuItems = [
        {
            id: "specialist",
            title: "Выбрать специалиста",
            icon: <Users className="w-6 h-6 text-neutral-600" />,
            path: "/barbers"
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-4">
            <div className="w-full max-w-md">
                <header className="flex justify-between items-start mb-8">
                    <div className="pt-2">
                        <div className="flex items-center gap-1 group cursor-pointer mb-1">
                            <h2 className="font-bold text-neutral-900 text-2xl ">
                                BarberShop
                            </h2>
                        </div>
                        <p className="text-neutral-400 text-sm">
                            Manzil
                        </p>
                    </div>
                </header>

                <div className="space-y-4 mt-12 px-1">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => navigate(item.path)}
                            className="flex items-center justify-between group cursor-pointer py-3 "
                        >
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 bg-neutral-100/80 rounded-full flex items-center justify-center ">
                                    {item.icon}
                                </div>
                                <span className="font-medium text-neutral-800 text-[17px]">
                                    {item.title}
                                </span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-neutral-300 " />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Client;