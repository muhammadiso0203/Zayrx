import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const Settings = () => {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [activeTab, setActiveTab] = useState("")

  const sidebarItems = [
    "General",
    "Plan & Pricing",
    "My Account",
    "Payment & Billing",
    "Tax & Duties",
    "Link Account",
    "Time & Language",
    "Password",
    "Notifications",
  ]

  return (
    <div className="p-1">
      <h1 className="text-2xl font-bold text-gray-900 mb-3">Settings</h1>
      <hr className="border-gray-200" />

      <div className="flex items-center justify-between gap-2 mt-4 mb-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500 font-medium">User</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900 font-bold">Settings</span>
        </div>
        <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 transition-colors rounded-xl font-bold shadow-sm text-white cursor-pointer text-sm">
          Save Change
        </button>
      </div>

      <div className="flex flex-col lg:flex-row border border-gray-200 rounded-2xl bg-white overflow-hidden min-h-150 shadow-sm">
        <div className="w-full lg:w-64 border-r border-gray-100 p-4 bg-gray-50/10">
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${activeTab === item
                  ? "bg-gray-50 border border-gray-300 text-gray-900"
                  : "text-gray-500 hover:bg-gray-50"
                  }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 p-8 lg:p-12">
          {activeTab === "Link Account" && (
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Link Account</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Your customers will use this information to contact you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Instagram</label>
                  <input
                    type="text"
                    placeholder="https://www.instagram.com/captain"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white placeholder:text-black"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Facebook</label>
                  <input
                    type="text"
                    placeholder="https://www.facebook.com/captain"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white placeholder:text-black"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Twitter</label>
                  <input
                    type="text"
                    placeholder="https://www.twitter.com/captain"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white placeholder:text-black"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">YouTube</label>
                  <input
                    type="text"
                    placeholder="https://www.youtube.com/captain"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white placeholder:text-black"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "Password" && (
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Password</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Change or view your password
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-bold text-gray-700">Current Password</label>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type={!show ? "text" : "password"}
                    placeholder="Current Password"
                    className=" w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                  <button className="absolute right-2 top-1/2 " onClick={() => setShow(!show)}>{show ? <Eye className="w-5 h-5 text-gray-500"/> : <EyeOff className="w-5 h-5 text-gray-500"/>}</button>
                </div>

                <div className="relative space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-bold text-gray-700">New Password</label>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type={!show1 ? "text" : "password"}
                    placeholder="New Password"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white "
                  />
                  <button className="absolute right-2 top-1/2 " onClick={() => setShow1(!show1)}>{show1 ? <Eye className="w-5 h-5 text-gray-500"/> : <EyeOff className="w-5 h-5 text-gray-500"/>}</button>
                </div>
              </div>
            </div>
          )}

          {activeTab !== "Link Account" && (
            <div className="flex items-center justify-center h-full text-gray-400">
              <p>Hech narsa yo'q</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings