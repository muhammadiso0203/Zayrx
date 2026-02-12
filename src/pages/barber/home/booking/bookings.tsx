import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight, CircleCheck, CircleMinus, CircleX, Clock, File, Filter, MoreHorizontal, Search, SortAscIcon } from "lucide-react"
import { useState } from "react"
import Popup from "./popup"
import { useBooking } from "@/pages/barber/service/hooks/useBooking"

const Bookings = () => {
  const [open, setOpen] = useState(false)

  const { data, isLoading } = useBooking({})
  console.log(data)
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Bookings</h1>
      <hr />
      <div className="flex justify-between items-center  gap-4 mb-4 mt-4">
        <h1 className="text-gray-500 text-sm">
          Home / <span className="font-bold text-black">Bookings</span>
        </h1>
        <div className="flex items-center gap-3">
          <Select>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Table view" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="table">Table view</SelectItem>
                <SelectItem value="calendar">Calendar view</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <button className="flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-[10px] font-semibold bg-amber-500 text-white">
            <File className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="mb-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
              <CircleMinus className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-2">Booking Completed</p>
              <p className="text-3xl font-bold text-gray-900">{data?.data?.bookingCompleted || 0}</p>
            </div>

            <div className="flex items-center gap-1 bg-green-50 p-0.5 rounded-[10px]">
              <ArrowUp className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400 text-sm font-semibold">8.5%</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="mb-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
              <CircleCheck className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-2">Booking Confirmed</p>
              <p className="text-3xl font-bold text-gray-900">{data?.data?.bookingConfirmed || 0}</p>
            </div>

            <div className="flex items-center gap-1 bg-red-50 p-0.5 rounded-[10px]">
              <ArrowDown className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-semibold">5.5%</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="mb-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-2">Booking Pending</p>
              <p className="text-3xl font-bold text-gray-900">{data?.data?.bookingPending || 0}</p>
            </div>

            <div className="flex items-center gap-1 bg-green-50 p-0.5 rounded-[10px]">
              <ArrowUp className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400 text-sm font-semibold">5.57%</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="mb-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
              <CircleX className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-2">Booking Cancelled</p>
              <p className="text-3xl font-bold text-gray-900">{data?.data?.bookingCancelled || 0}</p>
            </div>

            <div className="flex items-center gap-1 bg-red-50 p-0.5 rounded-[10px]">
              <ArrowDown className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-semibold">9.15%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-[10px] overflow-hidden mt-6">
        <div className="p-4 flex flex-col lg:flex-row justify-between lg:items-center gap-4">
          <h2 className="font-bold text-lg text-gray-800">Bookings Table</h2>
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

        <div className="overflow-hidden">
          {isLoading ? (
            <div>
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <CircleMinus className="w-6 h-6 text-white" />
              </div>
            </div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100 border-y border-gray-100 uppercase tracking-wider">
                  <th className="px-6 py-4 w-12 text-center">
                    <input type="checkbox" className="rounded border-gray-300 text-amber-500 focus:ring-amber-500 w-4 h-4" />
                  </th>
                  <th className="px-4 py-4 text-xs font-bold text-gray-500">No</th>
                  <th className="px-4 py-4 text-xs font-bold text-gray-500">Customer Name</th>
                  <th className="px-4 py-4 text-xs font-bold text-gray-500">Services</th>
                  <th className="px-4 py-4 text-xs font-bold text-gray-500">Booking Date</th>
                  <th className="px-4 py-4 text-xs font-bold text-gray-500">Staff Name</th>
                  <th className="px-4 py-4 text-xs font-bold text-gray-500">Status</th>
                  <th className="px-4 py-4 text-xs font-bold text-gray-500"></th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((booking:any) => (
                  <tr key={booking.id}>
                    <td className="px-6 py-4 text-center">
                      <input type="checkbox" className="rounded border-gray-300 text-amber-500 focus:ring-amber-500 w-4 h-4" />
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800 font-bold">{booking.id}</td>
                    <td className="px-4 py-4 text-sm text-gray-800 font-medium">{booking.customerName}</td>
                    <td className="px-4 py-4 text-sm text-gray-800 font-medium">{booking.service}</td>
                    <td className="px-4 py-4 text-sm text-gray-800 font-medium">{booking.bookingDate}</td>
                    <td className="px-4 py-4 text-sm text-gray-800 font-medium">{booking.staffName}</td>

                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${booking.status === "Completed" ? "border-green-200 bg-white text-green-500" :
                        booking.status === "Confirmed" ? "border-blue-200 bg-white text-blue-500" : booking.status === "Pending" ? "border-amber-200 bg-white text-amber-500" : "border-red-200 bg-white text-red-500"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${booking.status === "Completed" ? "bg-green-400" :
                          booking.status === "Confirmed" ? "bg-blue-400" : booking.status === "Pending" ? "bg-amber-500" : "bg-red-500"}`}></span>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button onClick={() => setOpen(true)} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                      <Popup open={open} setOpen={setOpen} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="p-4 flex  justify-between items-center gap-4 text-sm font-medium text-gray-500 border-t border-gray-100 bg-white">
          <div className="flex-1">
            Showing {data?.data?.length || 0} to {data?.data?.length || 0} of {data?.data?.length || 0} results
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
    </>
  )
}

export default Bookings