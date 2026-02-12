import { Download, Filter, MoreHorizontal, Plus, Search, SortAscIcon, ChevronLeft, ChevronRight, Pencil, Trash2, Loader2 } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react";
import Popup from "./popup";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteUser, useGetAllUsers } from "../../service/hooks/useUser";

const Staff = () => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const { data, isLoading } = useGetAllUsers()
  const { mutate: deleteUser } = useDeleteUser()
  const client = useQueryClient()

  const filteredUsers = data?.data?.filter((user: any) => user.role !== "super_admin") || [];

  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setOpen(true);
  }

  const handleDelete = (id: string | number) => {
    deleteUser(id, {
      onSuccess: () => {
        toast.success("Foydalanuvchi o'chirildi");
        client.invalidateQueries({ queryKey: ["users"] });
      },
      onError: () => {
        toast.error("Xatolik yuz berdi");
      }
    });
  };



  return (
    <div className="p-1 bg-gray-50/30 min-h-screen">
      <h1 className="font-bold text-2xl mb-4 text-gray-800">Staff</h1>
      <hr className="border-gray-200" />

      <div className="flex justify-between items-center gap-4 mb-4 mt-4">
        <h1 className="text-gray-500 text-sm">
          Management / <span className="font-bold text-black text-sm">Staff</span>
        </h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 border bg-white px-4 py-2.5 rounded-[10px] font-semibold text-sm text-gray-700 hover:bg-gray-50 transition">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-[10px] font-semibold bg-amber-500 text-white hover:bg-amber-600 transition shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Add New Staff
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-[10px] shadow-sm overflow-hidden">
        <div className="p-4 flex flex-col lg:flex-row justify-between lg:items-center gap-4">
          <h2 className="font-bold text-lg text-gray-800">Staff Table</h2>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 border bg-gray-50 px-3 py-2 rounded-[10px] transition-colors flex-1 focus-within:bg-white">
              <Search className="w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search" className="outline-none text-sm w-full bg-transparent" />
            </div>
            <button className="flex items-center gap-2 border bg-white px-4 py-2 rounded-[10px] text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium">
              <Filter className="w-4 h-4 text-gray-400" />
              Filtrlash
            </button>
            <button className="flex items-center gap-2 border bg-white px-4 py-2 rounded-[10px] text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium">
              <SortAscIcon className="w-4 h-4 text-gray-400" />
              Saralash
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="p-10 flex justify-center">
              <Loader2 className="animate-spin h-8 w-8 text-amber-500" />
            </div>
          ) : (
            <Table className="w-full text-left">
              <TableHeader>
                <TableRow className="bg-gray-50/50">
                  <TableHead className="px-6 py-4 w-12 text-center">
                    <input type="checkbox" className="rounded border-gray-300 transform scale-110" />
                  </TableHead>
                  <TableHead className="px-4 py-4 text-xs font-bold text-gray-500 uppercase">No</TableHead>
                  <TableHead className="px-4 py-4 text-xs font-bold text-gray-500 uppercase">F.I.SH</TableHead>
                  <TableHead className="px-4 py-4 text-xs font-bold text-gray-500 uppercase">Telefon raqami</TableHead>
                  <TableHead className="px-4 py-4 text-xs font-bold text-gray-500 uppercase">Roli</TableHead>
                  <TableHead className="px-4 py-4 text-xs font-bold text-gray-500 text-right uppercase">Amallar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user: any, index: number) => (
                  <TableRow key={user.id} className="hover:bg-gray-50/50 transition-colors group border-b border-gray-100">
                    <TableCell className="px-6 py-4 text-center">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-800 font-bold">{index + 1}</TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-800 font-medium">{user.name}</TableCell>
                    <TableCell className="px-4 py-4 text-sm text-gray-800 font-medium">{user.phoneNumber || user.phone}</TableCell>
                    <TableCell className="px-4 py-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border border-amber-200 bg-white text-amber-600 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        {user.role}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer outline-none">
                            <MoreHorizontal className="w-5 h-5" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40 p-1">
                          <DropdownMenuItem onClick={() => handleEdit(user)} className="cursor-pointer gap-2 py-2">
                            <Pencil className="w-4 h-4 text-blue-500" />
                            <span>Tahrirlash</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDelete(user.id)} className="cursor-pointer gap-2 py-2 text-red-600 focus:text-red-600 focus:bg-red-50">
                            <Trash2 className="w-4 h-4" />
                            <span>O'chirish</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>

        <div className="p-4 flex justify-between items-center gap-4 text-sm font-medium text-gray-500 border-t border-gray-100 bg-white">
          <div className="flex-1">
            Jami {filteredUsers.length} ta natijadan {filteredUsers.length} tasi ko'rsatilmoqda
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>Soni</span>
              <div className="relative inline-block">
                <Select defaultValue="10">
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="30">30</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 border rounded-lg hover:bg-gray-50 text-gray-400 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 bg-gray-50 border border-gray-200">1</button>
              <button className="p-2 border rounded-lg hover:bg-gray-50 text-gray-400 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Popup open={open} setOpen={setOpen} data={selectedUser} />
    </div>
  )
}

export default Staff;