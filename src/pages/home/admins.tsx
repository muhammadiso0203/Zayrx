import { useState } from "react";
import {
  UserPlus,
  Phone,
  Shield,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  Search,
  Filter,
  Download,
  Trash2,
  Edit2,
} from "lucide-react";
import { admins } from "@/data/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const Admins = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('list');


  return (
    <div className="p-1 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Management</h1>
          <div className="flex items-center gap-2 text-sm mt-1">
            <span className="text-gray-500 font-medium">Home</span>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <span className="text-gray-900 font-bold">Admins</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab('list')}
            className={`px-4 py-2 rounded-[10px] text-sm font-bold ${activeTab === 'list' ? 'bg-amber-500 text-white' : 'bg-white border text-gray-600'}`}
          >
            Admin List
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`px-4 py-2 rounded-[10px] text-sm font-bold flex items-center gap-2 ${activeTab === 'create' ? 'bg-amber-500 text-white' : 'bg-white border text-gray-600'}`}
          >
            <UserPlus className="w-4 h-4" />
            Create Admin
          </button>
        </div>
      </div>

      <hr className="border-gray-200 mb-6" />

      {activeTab === 'list' ? (
        <div className="bg-white border border-gray-100 rounded-3xl  overflow-hidden duration-300">
          <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-gray-800">System Administrators</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search admins..."
                  className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-[10px] text-sm"
                />
              </div>
              <button className="p-2 bg-gray-50 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors">
                <Filter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-50 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 text-gray-400 text-[11px] uppercase tracking-wider font-bold">
                  <th className="px-6 py-4">Admin</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Contact</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={admin.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm border-2 border-white ">
                          {admin.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{admin.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${admin.role === 'Admin' ? 'bg-purple-50 text-purple-600 border-purple-100' :
                        'bg-gray-50 text-gray-600 border-gray-100'
                        }`}>
                        {admin.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700 font-medium">{admin.email}</div>
                      <div className="text-xs text-gray-400">{admin.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`flex items-center gap-1.5 text-xs font-bold ${admin.status === 'Active' ? 'text-emerald-500' : 'text-gray-400'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${admin.status === 'Active' ? 'bg-emerald-500 border-emerald-200' : 'bg-gray-300'} border `}></div>
                        {admin.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-gray-400">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 items-center justify-center">


          <div className="bg-white border border-gray-100 rounded-[10px] p-8 w-300 ">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    Phone Number
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none transition-colors text-gray-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <input
                      type="tel"
                      placeholder="+998 90 000 00 00"

                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-[10px] bg-gray-50/30 text-gray-900 placeholder:text-gray-400 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors text-gray-400">
                      <Shield className="h-5 w-5" />
                    </div>
                    <Select

                    >
                      <SelectTrigger className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-[10px] bg-gray-50/30 text-gray-900 placeholder:text-gray-400 text-sm">
                        <SelectValue placeholder="Admin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors text-gray-400">
                        <Lock className="h-5 w-5" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"

                        className="block w-full pl-10 pr-12 py-3 border border-gray-200 rounded-[10px] bg-gray-50/30 text-gray-900 text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 "
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Confirm Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors text-gray-400">
                        <Lock className="h-5 w-5" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="block w-full pl-10 pr-12 py-3 border border-gray-200 rounded-[10px] bg-gray-50/30 text-gray-900 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setActiveTab('list')}
                  className="px-6 py-3 border border-gray-200 text-gray-600 rounded-[10px] font-bold cursor-pointer flex items-center justify-center gap-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-10 py-3 bg-amber-500 text-white rounded-[10px] font-bold cursor-pointer flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-5 h-5" />
                  Create Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admins;