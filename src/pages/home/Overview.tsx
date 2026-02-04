import {
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  ServerIcon,
  Wallet,
  RefreshCcw,
  Star,
  Search,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import img from "../../assets/image.png"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Overview = () => {
  return (
    <>
      <h1 className="font-bold text-2xl mb-6">Overview</h1>
      <hr />
      <div className="flex justify-between mt-6">
        <h1 className="text-gray-500">
          Home / <span className="font-bold text-black">Overview</span>
        </h1>
        <button className="border px-3 py-2 rounded-[10px] font-bold">Generate Reports</button>
      </div>
      <div className="flex gap-6">
        <div>
          <div className="flex gap-6 mt-6">
            <div className="w-90 bg-white rounded-2xl border border-gray-200 p-5">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
                <Wallet className="w-5 h-5 text-yellow-500" />
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <h3 className="text-xl font-semibold text-gray-900">
                    $23,249.00
                  </h3>
                </div>

                <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-green-500 bg-green-50 px-2 py-1 rounded-md">
                  <ArrowUpRight className="w-4 h-4" />
                  10.5%
                </div>
              </div>
            </div>

            <div className="w-90 bg-white rounded-2xl border border-gray-200 p-5">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-yellow-500" />
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Bookings</p>
                  <h3 className="text-xl font-semibold text-gray-900">2,095</h3>
                </div>
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-red-500 bg-red-50 px-2 py-1 rounded-md">
                  <ArrowDownRight className="w-4 h-4" />
                  10.5%
                </div>
              </div>
            </div>

            <div className="w-90 bg-white rounded-2xl border border-gray-200 p-5">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
                <ServerIcon className="w-5 h-5 text-yellow-500" />
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Services</p>
                  <h3 className="text-xl font-semibold text-gray-900">27</h3>
                </div>
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-green-500 bg-green-50 px-2 py-1 rounded-md">
                  <ArrowUpRight className="w-4 h-4" />
                  10.5%
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-2xl border border-gray-200 p-6 mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Revenue Analytics</h2>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Bar Chart" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="bar">Bar Chart</SelectItem>
                      <SelectItem value="line">Line Chart</SelectItem>
                      <SelectItem value="area">Area Chart</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <button className="p-1.5 border rounded-lg text-gray-500 hover:bg-gray-50">
                  <RefreshCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="text-3xl font-bold">$23,249.00</h3>
                <div className="flex items-center text-red-500 text-sm font-medium">
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                  4,5%
                </div>
                <span className="text-sm text-gray-400">Last updated: May 28, 2025</span>
              </div>

              <div className="relative h-64 mt-8">
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pb-6">
                  <span>25K</span>
                  <span>20K</span>
                  <span>15K</span>
                  <span>10K</span>
                  <span>0</span>
                </div>

                <div className="absolute inset-0 ml-8 flex justify-around items-end pb-6 h-full">
                  {[
                    { day: "Sun", val: 40, shaded: 30 },
                    { day: "Mon", val: 60, shaded: 35 },
                    { day: "Tue", val: 55, shaded: 40 },
                    { day: "Wed", val: 45, shaded: 30 },
                    { day: "Thu", val: 80, shaded: 45 },
                    { day: "Fri", val: 50, shaded: 35 },
                    { day: "Sat", val: 42, shaded: 32 },
                  ].map((item) => (
                    <div key={item.day} className="flex flex-col items-center gap-2 group cursor-pointer">
                      <div className="w-12 bg-yellow-400 rounded-t-md relative" style={{ height: `${item.val * 1.8}px` }}>
                        <div className="absolute top-0 left-0 right-0 bg-gray-100 opacity-30 rounded-t-md" style={{ height: `${item.shaded * 2}px`, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,.5) 5px, rgba(255,255,255,.5) 10px)' }}></div>
                      </div>
                      <span className="text-xs text-gray-400">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-6 bg-white rounded-2xl border border-gray-200 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Best Performance Staff</h2>
            <button className="p-1.5 border rounded-lg text-gray-400 hover:bg-gray-50">
              <RefreshCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { name: "Sophia Martinez", role: "Senior Barber", rating: "4.7", imgUrl: img },
              { name: "Daniel Wilson", role: "Senior Barber", rating: "4.7", imgUrl: img },
              { name: "James Anderson", role: "Senior Barber", rating: "4.7", imgUrl: img },
              { name: "Olivia Brown", role: "Senior Barber", rating: "4.7", imgUrl: img },
              { name: "Michael Thompson", role: "Senior Barber", rating: "4.7", imgUrl: img },
              { name: "Emily Carter", role: "Senior Barber", rating: "4.7", imgUrl: img },
            ].map((avatar) => (
              <div key={avatar.name} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={avatar.imgUrl} className="w-10 h-10 rounded-full object-cover" alt={avatar.name} />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{avatar.name}</h4>
                    <p className="text-xs text-gray-400">{avatar.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-gray-700">{avatar.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 mt-6 overflow-hidden">
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <h2 className="text-lg font-bold">Recent Bookings</h2>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 w-64"
              />
            </div>
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm font-medium text-gray-600">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm font-medium text-gray-600">
              <ArrowUpDown className="w-4 h-4" /> Sort by
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-medium">
              <tr>
                <th className="p-4"><input type="checkbox" className="rounded" /></th>
                <th className="p-4">No</th>
                <th className="p-4">Customer Name</th>
                <th className="p-4">Services</th>
                <th className="p-4">Booking Date</th>
                <th className="p-4">Staff Name</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {[
                { no: 1, name: "Liam Thompson", service: "Fade Masterpiece", date: "May 15, 2025 - 2:45 PM", staff: "Sophia Martinez", status: "Pending", statusColor: "amber" },
                { no: 2, name: "Noah Johnson", service: "Buzz Cut Bliss", date: "May 22, 2025 - 11:15 AM", staff: "Olivia Brown", status: "Confirmed", statusColor: "blue" },
                { no: 3, name: "Ava Wilson", service: "Pompadour Perfection", date: "May 10, 2025 - 1:00 PM", staff: "Elijah Davis", status: "Confirmed", statusColor: "blue" },
                { no: 4, name: "Isabella Garcia", service: "Classic Crew Cut", date: "May 28, 2025 - 4:00 PM", staff: "Mia Rodriguez", status: "Confirmed", statusColor: "blue" },
                { no: 5, name: "Lucas Lee", service: "Beard Sculpting", date: "May 5, 2025 - 9:30 AM", staff: "Amelia Harris", status: "Completed", statusColor: "emerald" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4"><input type="checkbox" className="rounded" /></td>
                  <td className="p-4 text-gray-500 font-medium">{row.no}</td>
                  <td className="p-4 font-bold text-gray-900">{row.name}</td>
                  <td className="p-4 text-gray-600">{row.service}</td>
                  <td className="p-4 text-gray-600">{row.date}</td>
                  <td className="p-4 text-gray-600 font-medium">{row.staff}</td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${row.statusColor === 'amber' ? 'bg-amber-50 text-amber-500 border-amber-200' :
                      row.statusColor === 'blue' ? 'bg-blue-50 text-blue-500 border-blue-200' :
                        'bg-emerald-50 text-emerald-500 border-emerald-200'
                      }`}>
                      • {row.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 flex justify-between items-center text-sm border-t border-gray-100">
          <p className="text-gray-500">Showing 1 to 5 of, 100 results</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Per page</span>
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
            <div className="flex items-center gap-1">
              <button className="p-1.5 border rounded-md text-gray-400"><ChevronLeft className="w-4 h-4" /></button>
              {[1].map((page) => (
                <button key={page} className={`w-8 h-8 rounded-md flex items-center justify-center font-medium ${page === 3 ? 'bg-yellow-500 text-white' : 'text-gray-500 hover:bg-gray-50'}`}>
                  {page}
                </button>
              ))}
              <button className="p-1.5 border rounded-md text-gray-400"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
