import { Download, Filter, MoreHorizontal, Plus, Search, SortAscIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { users } from "../../../data/data"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react";
import Popup from "./popup";

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-1 bg-gray-50/30 min-h-screen">
      <h1 className="font-bold text-2xl mb-4">Users</h1>
      <hr />

      <div className="flex justify-between items-center  gap-4 mb-4 mt-4">
        <h1 className="text-gray-500 text-sm">
          User / <span className="font-bold text-black">Users</span>
        </h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 border bg-white px-4 py-2.5 rounded-[10px] font-semibold text-sm text-gray-700">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button className="flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-[10px] font-semibold bg-amber-500 text-white">
            <Plus className="w-4 h-4" />
            Add New User
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-[10px]">
        <div className="p-4 flex flex-col lg:flex-row justify-between lg:items-center gap-4">
          <h2 className="font-bold text-lg text-gray-800">Users Table</h2>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 border bg-white px-3 py-2 rounded-[10px]  transition-colors flex-1">
              <Search className="w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search" className="outline-none text-sm w-full" />
            </div>
            <button className="flex items-center gap-2 border bg-white px-4 py-2 rounded-[10px] text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium">
              <Filter className="w-4 h-4 text-gray-400" />
              Filter
            </button>
            <button className="flex items-center gap-2 border bg-white px-4 py-2 rounded-[10px] text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium">
              <SortAscIcon className="w-4 h-4 text-gray-400" />
              Sort by
            </button>
          </div>
        </div>

        <div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-y border-gray-100 uppercase tracking-wider">
                <th className="px-6 py-4 w-12 text-center">
                  <input type="checkbox" className="rounded border-gray-300 text-amber-500 focus:ring-amber-500 w-4 h-4" />
                </th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500">No</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500">Full Name</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500">Email Address</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500">Phone Number</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500">Role</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4 text-center">
                    <input type="checkbox" className="rounded border-gray-300 text-amber-500 focus:ring-amber-500 w-4 h-4" />
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800 font-bold">{user.id}</td>
                  <td className="px-4 py-4 text-sm text-gray-800 font-medium">{user.name}</td>
                  <td className="px-4 py-4 text-sm text-gray-800 font-medium">{user.email}</td>
                  <td className="px-4 py-4 text-sm text-gray-800 font-medium">{user.phone}</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-amber-200 bg-white text-amber-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button onClick={() => setOpen(true)} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                    <Popup open={open} setOpen={setOpen} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 flex  justify-between items-center gap-4 text-sm font-medium text-gray-500 border-t border-gray-100 bg-white">
          <div className="flex-1">
            Showing 1 to {users.length} of, 500 results
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>Per page</span>
              <div className="relative inline-block">
                <Select>
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="10" />
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
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500  border border-gray-200">1</button>
              <button className="p-2 border rounded-lg hover:bg-gray-50 text-gray-400 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users