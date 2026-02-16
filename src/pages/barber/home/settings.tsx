import { Bell, Eye, EyeOff, Globe, Mail, Moon, Sun, User, CreditCard, FileText, Link as LinkIcon, Clock, Shield } from "lucide-react"
import { useState } from "react"

const Settings = () => {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [activeTab, setActiveTab] = useState("General")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)

  const sidebarItems = [
    { name: "General", icon: User },
    { name: "Plan & Pricing", icon: CreditCard },
    { name: "My Account", icon: User },
    { name: "Payment & Billing", icon: CreditCard },
    { name: "Tax & Duties", icon: FileText },
    { name: "Link Account", icon: LinkIcon },
    { name: "Time & Language", icon: Clock },
    { name: "Password", icon: Shield },
    { name: "Notifications", icon: Bell },
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
          Save Changes
        </button>
      </div>

      <div className="flex flex-col lg:flex-row border border-gray-200 rounded-2xl bg-white overflow-hidden min-h-[600px] shadow-sm">
        <div className="w-full lg:w-64 border-r border-gray-100 p-4 bg-gray-50/10">
          <nav className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-3 ${activeTab === item.name
                    ? "bg-amber-50 border border-amber-200 text-amber-700"
                    : "text-gray-500 hover:bg-gray-50"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </button>
              )
            })}
          </nav>
        </div>

        <div className="flex-1 p-8 lg:p-12">
          {/* General Settings */}
          {activeTab === "General" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">General Settings</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Manage your general account settings and preferences.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Business Name</label>
                  <input
                    type="text"
                    placeholder="Elite BarberShop"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Business Email</label>
                  <input
                    type="email"
                    placeholder="info@barbershop.uz"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Address</label>
                  <textarea
                    placeholder="Toshkent, Amir Temur ko'chasi 108"
                    rows={3}
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white resize-none"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    {isDarkMode ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-amber-500" />}
                    <div>
                      <p className="font-bold text-sm text-gray-900">Dark Mode</p>
                      <p className="text-xs text-gray-500">Toggle dark mode theme</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${isDarkMode ? "bg-amber-500" : "bg-gray-300"}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${isDarkMode ? "translate-x-6" : ""}`} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Plan & Pricing */}
          {activeTab === "Plan & Pricing" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Plan & Pricing</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Choose the plan that works best for your business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Basic Plan */}
                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-amber-500 transition-colors">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Basic</h3>
                    <p className="text-sm text-gray-500">For small businesses</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">$29</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Up to 100 bookings/month
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      2 staff members
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Basic analytics
                    </li>
                  </ul>
                  <button className="w-full py-2.5 border-2 border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                    Current Plan
                  </button>
                </div>

                {/* Pro Plan */}
                <div className="border-2 border-amber-500 rounded-2xl p-6 relative bg-amber-50/30">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Popular
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Pro</h3>
                    <p className="text-sm text-gray-500">For growing businesses</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">$79</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Unlimited bookings
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      10 staff members
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Advanced analytics
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Priority support
                    </li>
                  </ul>
                  <button className="w-full py-2.5 bg-amber-500 text-white rounded-xl font-bold hover:bg-amber-600 transition-colors">
                    Upgrade Now
                  </button>
                </div>

                {/* Enterprise Plan */}
                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-amber-500 transition-colors">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Enterprise</h3>
                    <p className="text-sm text-gray-500">For large businesses</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">$199</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Unlimited everything
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Unlimited staff
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Custom integrations
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Dedicated support
                    </li>
                  </ul>
                  <button className="w-full py-2.5 border-2 border-amber-500 text-amber-600 rounded-xl font-bold hover:bg-amber-50 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* My Account */}
          {activeTab === "My Account" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">My Account</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Manage your personal account information.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    SR
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-amber-500 text-white rounded-lg text-sm font-semibold hover:bg-amber-600 transition-colors">
                      Change Photo
                    </button>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF. Max 2MB</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Sardor Rahimov"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="sardor@example.com"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Bio</label>
                  <textarea
                    placeholder="Professional barber with 5+ years of experience..."
                    rows={4}
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Payment & Billing */}
          {activeTab === "Payment & Billing" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Payment & Billing</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Manage your payment methods and billing information.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-4 bg-gradient-to-br from-gray-900 to-gray-700 text-white">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-xs text-gray-300">Card Holder</p>
                      <p className="font-bold">SARDOR RAHIMOV</p>
                    </div>
                    <CreditCard className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="mb-4">
                    <p className="text-lg tracking-wider font-mono">•••• •••• •••• 4242</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <div>
                      <p className="text-gray-400">Expires</p>
                      <p className="font-semibold">12/25</p>
                    </div>
                    <div>
                      <p className="text-gray-400">CVV</p>
                      <p className="font-semibold">•••</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-2.5 border-2 border-dashed border-gray-300 rounded-xl font-bold text-gray-600 hover:border-amber-500 hover:text-amber-600 transition-colors">
                  + Add New Card
                </button>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Billing Address</label>
                  <input
                    type="text"
                    placeholder="Toshkent, Uzbekistan"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">City</label>
                    <input
                      type="text"
                      placeholder="Toshkent"
                      className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Postal Code</label>
                    <input
                      type="text"
                      placeholder="100000"
                      className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tax & Duties */}
          {activeTab === "Tax & Duties" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Tax & Duties</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Configure your tax and duty settings for compliance.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Tax ID / INN</label>
                  <input
                    type="text"
                    placeholder="123456789"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Company Registration Number</label>
                  <input
                    type="text"
                    placeholder="UZ-12345678"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">VAT Number</label>
                  <input
                    type="text"
                    placeholder="UZ123456789"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Tax Rate (%)</label>
                  <input
                    type="number"
                    placeholder="12"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Tax settings will be applied to all future transactions. Please consult with your accountant before making changes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Link Account */}
          {activeTab === "Link Account" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Link Account</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Connect your social media accounts to expand your reach.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Instagram</label>
                  <input
                    type="text"
                    placeholder="https://www.instagram.com/barbershop"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Facebook</label>
                  <input
                    type="text"
                    placeholder="https://www.facebook.com/barbershop"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Twitter</label>
                  <input
                    type="text"
                    placeholder="https://www.twitter.com/barbershop"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">YouTube</label>
                  <input
                    type="text"
                    placeholder="https://www.youtube.com/barbershop"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">TikTok</label>
                  <input
                    type="text"
                    placeholder="https://www.tiktok.com/@barbershop"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Telegram</label>
                  <input
                    type="text"
                    placeholder="https://t.me/barbershop"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Time & Language */}
          {activeTab === "Time & Language" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Time & Language</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Set your timezone and language preferences.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Timezone</label>
                  <select className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white">
                    <option>(GMT+5:00) Tashkent</option>
                    <option>(GMT+3:00) Moscow</option>
                    <option>(GMT+0:00) London</option>
                    <option>(GMT-5:00) New York</option>
                    <option>(GMT-8:00) Los Angeles</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Language</label>
                  <select className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white">
                    <option>O'zbek tili</option>
                    <option>Русский</option>
                    <option>English</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Date Format</label>
                  <select className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white">
                    <option>DD/MM/YYYY</option>
                    <option>MM/DD/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Time Format</label>
                  <select className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white">
                    <option>24-hour (14:30)</option>
                    <option>12-hour (2:30 PM)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Currency</label>
                  <select className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white">
                    <option>UZS - Uzbek Som</option>
                    <option>USD - US Dollar</option>
                    <option>EUR - Euro</option>
                    <option>RUB - Russian Ruble</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Password */}
          {activeTab === "Password" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Password</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Change your password to keep your account secure.
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-bold text-gray-700">Current Password</label>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type={!show ? "password" : "text"}
                    placeholder="Enter current password"
                    className="w-full px-3 py-2.5 pr-10 rounded-[10px] border border-gray-200 bg-white"
                  />
                  <button
                    className="absolute right-3 top-9"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <Eye className="w-5 h-5 text-gray-500" /> : <EyeOff className="w-5 h-5 text-gray-500" />}
                  </button>
                </div>

                <div className="relative space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-bold text-gray-700">New Password</label>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type={!show1 ? "password" : "text"}
                    placeholder="Enter new password"
                    className="w-full px-3 py-2.5 pr-10 rounded-[10px] border border-gray-200 bg-white"
                  />
                  <button
                    className="absolute right-3 top-9"
                    onClick={() => setShow1(!show1)}
                  >
                    {show1 ? <Eye className="w-5 h-5 text-gray-500" /> : <EyeOff className="w-5 h-5 text-gray-500" />}
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full px-3 py-2.5 rounded-[10px] border border-gray-200 bg-white"
                  />
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-sm text-amber-800 font-semibold mb-2">Password Requirements:</p>
                  <ul className="space-y-1 text-xs text-amber-700">
                    <li>• At least 8 characters long</li>
                    <li>• Contains uppercase and lowercase letters</li>
                    <li>• Contains at least one number</li>
                    <li>• Contains at least one special character</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === "Notifications" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Notifications</h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Manage how you receive notifications and updates.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-bold text-sm text-gray-900">Email Notifications</p>
                      <p className="text-xs text-gray-500">Receive updates via email</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${emailNotifications ? "bg-amber-500" : "bg-gray-300"}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${emailNotifications ? "translate-x-6" : ""}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-bold text-sm text-gray-900">Push Notifications</p>
                      <p className="text-xs text-gray-500">Receive push notifications</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setPushNotifications(!pushNotifications)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${pushNotifications ? "bg-amber-500" : "bg-gray-300"}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${pushNotifications ? "translate-x-6" : ""}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-bold text-sm text-gray-900">SMS Notifications</p>
                      <p className="text-xs text-gray-500">Receive SMS updates</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSmsNotifications(!smsNotifications)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${smsNotifications ? "bg-amber-500" : "bg-gray-300"}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${smsNotifications ? "translate-x-6" : ""}`} />
                  </button>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="font-bold text-sm text-gray-900 mb-4">Notification Preferences</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-amber-500 rounded" />
                      <span className="text-sm text-gray-700">New booking confirmations</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-amber-500 rounded" />
                      <span className="text-sm text-gray-700">Booking cancellations</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-amber-500 rounded" />
                      <span className="text-sm text-gray-700">Weekly reports</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-amber-500 rounded" />
                      <span className="text-sm text-gray-700">Marketing updates</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-amber-500 rounded" />
                      <span className="text-sm text-gray-700">Payment confirmations</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings