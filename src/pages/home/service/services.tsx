import { Filter, MoreHorizontal, Plus, Search, SortAscIcon, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react";
import Popup from "./popup";
import { useGetResources } from "../../service/query/useGetResources";
import { useGetServiceCategory } from "../../service/query/useGetServiceCategory";

const Services = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data, isLoading: isResourcesLoading } = useGetResources({ search, page, limit });
  const { data: categoriesData } = useGetServiceCategory();

  const getCategoryName = (categoryId: number) => {
    const category = categoriesData?.data?.find((cat: any) => cat.id === categoryId);
    return category?.name || "No Category";
  };

  const isLoading = isResourcesLoading;

  return (
    <div className="p-1 bg-gray-50/30 min-h-screen">
      <h1 className="font-bold text-2xl mb-4">Services</h1>
      <hr />

      <div className="flex justify-between items-center  gap-4 mb-4 mt-4">
        <h1 className="text-gray-500 text-sm">
          Management / <span className="font-bold text-black">Services</span>
        </h1>
        <div className="flex items-center gap-3">
          <button onClick={() => setOpen(true)} className="flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-[10px] font-semibold bg-amber-500 text-white">
            <Plus className="w-4 h-4" />
            Create Services
          </button>
          <Popup open={open} setOpen={setOpen} />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-[10px] overflow-hidden">
        <div className="p-4 flex flex-col lg:flex-row justify-between lg:items-center gap-4">
          <h2 className="font-bold text-lg text-gray-800">Services Table</h2>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 border bg-white px-3 py-2 rounded-[10px]  transition-colors flex-1">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-sm w-full"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
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

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-y border-gray-100 uppercase tracking-wider">
                <th className="px-6 py-4 w-12 text-center">
                  <input type="checkbox" className="rounded border-gray-300 text-amber-500 focus:ring-amber-500 w-4 h-4" />
                </th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500">ID</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500">Service name</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500">Description</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500">Duration</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500">Price</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500">Category</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-500 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
                      <span className="text-sm text-gray-500">Loading services...</span>
                    </div>
                  </td>
                </tr>
              ) : data?.data?.length > 0 ? (
                data.data.map((service: any) => (
                  <tr key={service.id} className="hover:bg-gray-50/50 transition-colors group border-b border-gray-100">
                    <td className="px-6 py-4 text-center">
                      <input type="checkbox" className="rounded border-gray-300 text-amber-500 focus:ring-amber-500 w-4 h-4" />
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800 font-bold">{service.id}</td>
                    <td className="px-4 py-4 text-sm text-gray-800 font-medium">{service.name}</td>
                    <td className="px-4 py-4 text-sm text-gray-600 font-normal max-w-[300px] truncate">{service.description}</td>
                    <td className="px-4 py-4 text-sm text-gray-800 font-medium">{service.durationMinutes} min</td>
                    <td className="px-4 py-4 text-sm text-gray-800 font-medium">{service.basePrice.toLocaleString()} UZS</td>
                    <td className="px-4 py-4">
                      <span className="items-center gap-1.5 px-3 py-1 rounded-[10px] text-xs font-semibold border border-blue-500 text-blue-500">
                        {getCategoryName(service.categoryId)}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-gray-500">
                    No services found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-500 border-t border-t-gray-300 border-gray-100 bg-white">
          <div className="flex-1">
            Showing {data?.data?.length || 0} results
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>Per page</span>
              <div className="relative inline-block">
                <Select value={limit.toString()} onValueChange={(val) => {
                  setLimit(Number(val));
                  setPage(1);
                }}>
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
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 border rounded-lg hover:bg-gray-50 text-gray-400 transition-colors disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-white bg-amber-500">{page}</button>
            <button
              onClick={() => setPage(p => p + 1)}
              disabled={!data?.data || data.data.length < limit}
              className="p-2 border rounded-lg hover:bg-gray-50 text-gray-400 transition-colors disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;