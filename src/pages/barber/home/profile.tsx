import { BriefcaseBusiness, Clock, Loader2, Phone, Shield, Star, User, Pencil, Save, X, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateProfile, useGetProfile, useUpdateProfile } from "../service/hooks/useProfile";

const Profile = () => {
    const { data, isLoading } = useGetProfile();
    const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();
    const { mutate: createProfile, isPending: isCreating } = useCreateProfile();
    const isPending = isUpdating || isCreating;
    const user = data?.data;
    const role = user?.role;

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        bio: "",
        experienceYears: 0,
        startTime: "",
        endTime: "",
        weekday: ""
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.barberProfile?.fullName || user.name || "",
                phoneNumber: user.phoneNumber || "",
                bio: user.barberProfile?.bio || "",
                experienceYears: user.barberProfile?.experienceYears || 0,
                startTime: user.barberProfile?.startTime || "",
                endTime: user.barberProfile?.endTime || "",
                weekday: user.barberProfile?.weekday || ""
            });
        }
    }, [user]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {

        const payload: any = {
            ...formData,
            fullName: formData.name,
            weekday: Number(formData.weekday),
            experienceYears: Number(formData.experienceYears)
        };

        if (formData.phoneNumber === user?.phoneNumber) {
            delete payload.phoneNumber;
        }

        if (role === 'barber' && !user?.barberProfile) {
            console.log("Creating Barber Profile...");
            createProfile({ ...payload, userId: user.id }, {
                onSuccess: () => setIsEditing(false)
            });
            return;
        }

        const id = role === 'barber' ? user?.barberProfile?.id : user?.id;

        if (!id) {
            console.error("ID missing for update");
            return;
        }

        updateProfile({ id, role, data: payload }, {
            onSuccess: () => {
                setIsEditing(false);
            }
        });
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
                <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
            </div>
        );
    }

    return (
        <div className="p-1 min-h-[calc(100vh-100px)]">
            <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-40 bg-linear-to-r from-amber-400 to-amber-600 relative">
                    <div className="absolute -bottom-16 left-8">
                        <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-md flex items-center justify-center">
                            <User className="w-16 h-16 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div className="pt-20 pb-8 px-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{user?.barberProfile?.fullName || user?.name || "Foydalanuvchi"}</h1>
                            <p className="text-gray-500 font-medium">{user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || "Role aniqlanmadi"}</p>
                        </div>
                        {!isEditing && (
                            <Button onClick={() => setIsEditing(true)} variant="outline" className="gap-2">
                                <Pencil className="w-4 h-4" />
                                Tahrirlash
                            </Button>
                        )}
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Telefon raqam</p>
                                {isEditing ? (
                                    <Input
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        className="h-8 mt-1"
                                    />
                                ) : (
                                    <p className="text-gray-900 font-semibold">{user?.phoneNumber || "Kiritilmagan"}</p>
                                )}
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Role</p>
                                <p className="text-gray-900 font-semibold">{user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || "Kiritilmagan"}</p>
                            </div>
                        </div>
                        {role !== 'super_admin' && (
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <User className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Bio</p>
                                    {isEditing ? (
                                        <Input
                                            name="bio"
                                            value={formData.bio}
                                            onChange={handleInputChange}
                                            className="h-8 mt-1"
                                        />
                                    ) : (
                                        <p className="text-gray-900 font-semibold">{user?.barberProfile?.bio || "Kiritilmagan"}</p>
                                    )}
                                </div>
                            </div>)}
                        {role !== 'super_admin' && (
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <User className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Barber</p>
                                    {isEditing ? (
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="h-8 mt-1"
                                        />
                                    ) : (
                                        <p className="text-gray-900 font-semibold">{user?.barberProfile?.fullName || "Kiritilmagan"}</p>
                                    )}
                                </div>
                            </div>
                        )}
                        {role !== 'super_admin' && (
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Star className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Rating</p>
                                    <p className="text-gray-900 font-semibold">{user?.barberProfile?.ratingAvg || "Kiritilmagan"}</p>
                                </div>
                            </div>)}
                        {role !== 'super_admin' && (
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <BriefcaseBusiness className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Exprience</p>
                                    {isEditing ? (
                                        <Input
                                            name="experienceYears"
                                            value={formData.experienceYears}
                                            onChange={handleInputChange}
                                            className="h-8 mt-1"
                                            type="number"
                                        />
                                    ) : (
                                        <p className="text-gray-900 font-semibold">{user?.barberProfile?.experienceYears || "Kiritilmagan"}</p>
                                    )}
                                </div>
                            </div>)}
                        {role !== 'super_admin' && (
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Start Time</p>
                                    {isEditing ? (
                                        <Input
                                            name="startTime"
                                            value={formData.startTime}
                                            onChange={handleInputChange}
                                            className="h-8 mt-1"
                                            type="time"
                                        />
                                    ) : (
                                        <p className="text-gray-900 font-semibold">{user?.barberProfile?.startTime || "Kiritilmagan"}</p>
                                    )}
                                </div>
                            </div>)}
                        {role !== 'super_admin' && (
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">End Time</p>
                                    {isEditing ? (
                                        <Input
                                            name="endTime"
                                            value={formData.endTime}
                                            onChange={handleInputChange}
                                            className="h-8 mt-1"
                                            type="time"
                                        />
                                    ) : (
                                        <p className="text-gray-900 font-semibold">{user?.barberProfile?.endTime || "Kiritilmagan"}</p>
                                    )}
                                </div>
                            </div>)}
                        {role !== 'super_admin' && (
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Week Day</p>
                                    {isEditing ? (
                                        <Input
                                            name="weekday"
                                            value={formData.weekday}
                                            onChange={handleInputChange}
                                            className="h-8 mt-1"
                                            type="number"
                                        />
                                    ) : (
                                        <p className="text-gray-900 font-semibold">{user?.barberProfile?.weekday || "Kiritilmagan"}</p>
                                    )}
                                </div>
                            </div>)}
                    </div>

                    {isEditing && (
                        <div className="mt-8 flex justify-end gap-4 border-t border-gray-100 pt-6">
                            <Button
                                variant="outline"
                                onClick={() => setIsEditing(false)}
                                disabled={isPending}
                            >
                                <X className="w-4 h-4 mr-2" />
                                Bekor qilish
                            </Button>
                            <Button
                                onClick={handleSave}
                                disabled={isPending}
                                className="bg-amber-500 hover:bg-amber-600 text-white"
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Saqlanmoqda...
                                    </>
                                ) : (
                                    <>
                                        <Save className="w-4 h-4 mr-2" />
                                        Saqlash
                                    </>
                                )}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
