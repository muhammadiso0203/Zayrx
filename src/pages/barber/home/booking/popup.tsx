import { X } from 'lucide-react';

const Popup = ({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) => {


  if (!open) return null;

  return (
    <div className="min-h-screen fixed inset-0 bg-black/10  flex items-center justify-center p-4 z-50">
      <div className="absolute top-20 right-10 bg-white rounded-xl w-full max-w-md max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Booking Details</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className='flex items-start flex-col'>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Customer <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <div className="w-full h-12 px-4 py-3 border border-gray-300 rounded-lg flex">
                
              </div>
            </div>
          </div>

          <div className='flex items-start flex-col'>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Staff <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <div className="w-full h-12 px-4 py-3 border border-gray-300 rounded-lg flex">
                
              </div>
            </div>
          </div>

          <div className='flex items-start flex-col'>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Services <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <div className="w-full px-2 py-2 border border-gray-300 rounded-lg bg-white flex flex-wrap gap-3 items-center">
                  <div
                    className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 flex items-center gap-5"
                  >
                    <button
                      className="text-gray-400 border border-gray-200 p-1 rounded-md"
                    >
                      Haircut ×
                    </button>
                    <button
                      className="text-gray-400 border border-gray-200 p-1 rounded-md"
                    >
                      Coloring ×
                    </button>
                  </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className='flex items-start flex-col'>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Date <span className="text-red-500">*</span>
              </label>
              <div
                className="w-full px-4 py-3 border border-gray-300 rounded-lg flex"
              >
                May 23, 2025
              </div>
            </div>
            <div className='flex items-start flex-col'>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Time <span className="text-red-500">*</span>
              </label>
              <div className="relative w-full">
               <div className="w-full px-4 py-3 border border-gray-300 rounded-lg flex">
                5:00 PM
               </div>
              </div>
            </div>
          </div>

          <div className='flex items-start flex-col'>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Notes <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              name="notes"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
              rows={4}
              placeholder="Add any additional notes..."
            />
            <p className="text-xs text-gray-400 mt-1">50/200</p>
          </div>
        </div>

        <div className="flex gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => setOpen(false)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="flex-1 px-4 py-3 bg-yellow-400 rounded-lg font-semibold shadow-md text-white cursor-pointer"
          >
            Confirmed
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;