"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const Navbar = () => {
  const [isAgentsOpen, setIsAgentsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full border-b border-gray-200">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="https://s3-alpha-sig.figma.com/img/ad46/b1d7/2403c28e995c4f099c23d0fb97df41f4?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lnJAc79EzzEKXY-xEbtzYJO28y4uxsNrbneINFouZm6KxH4EuIkj~YMFuVFRDeFABZEvBBHSNiC2VvmBnLuQK933qGJyIHPfOsd8exddR~9CpnjWZmIOq1WtrX-CLneNOj7qmvdU~~b6niq7k8NjdZmCyuAuge7N4cKugmABohWrzjspFXSVcHhW~7I~Flkoa~vugG4TEUJOMADem5tfqV0Z0W1Tf3UBBQZnkRAoED3tgzYrOjS2DM4pjkPPQg3JnbveR1TmlN72ZHXy~JsLTkzUJJzfInRQfek1-im-257GNUQjHgStLkWf9YzBUxXLDkLX29bHwGIfvAcwAlb-WA__"
                alt="Realtor Logo"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-[#666666] hover:text-[#40A0A0] font-medium">
                HOME
              </a>
              <a href="#" className="text-[#666666] hover:text-[#40A0A0] font-medium">
                DASHBOARD
              </a>
              <div className="relative">
                <button
                  className="text-[#666666] hover:text-[#40A0A0] bg-white font-medium flex items-center"
                  onClick={() => setIsAgentsOpen(!isAgentsOpen)}
                >
                  AGENTS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isAgentsOpen && (
                  <div className="absolute top-full mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Find Agent
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Become an Agent
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="text-[#666666] hover:text-[#40A0A0] font-medium">
                AGENCIES
              </a>
              <a href="#" className="text-[#666666] hover:text-[#40A0A0] font-medium">
                NOTIFICATION
              </a>
            </div>

            {/* Right Side Items */}
            <div className="hidden md:flex items-center space-x-4">
              {/* <button className="text-[#666666] hover:text-[#40A0A0]">
                <Bell className="h-5 w-5" />
              </button> */}

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-2 text-[#666666] bg-white"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <div className="w-8 h-8 bg-[#40A0A0] rounded-full flex items-center justify-center">
                    <span className="text-white">Me</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Your Profile
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Settings
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* More from Realtor Button */}
              <button className="bg-[#40A0A0] text-white px-4 py-2 rounded-md hover:bg-[#358585]">
                More from Realtor
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button className="flex items-center space-x-2 text-[#666666] bg-white" onClick={() => setIsLangOpen(!isLangOpen)}>
                  <span>🇬🇧</span>
                  <span>Eng</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        English
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Spanish
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        French
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 text-[#666666] hover:text-[#40A0A0] font-medium">
            HOME
          </a>
          <a href="#" className="block px-3 py-2 text-[#666666] hover:text-[#40A0A0] font-medium">
            DASHBOARD
          </a>
          <a href="#" className="block px-3 py-2 text-[#666666] hover:text-[#40A0A0] font-medium">
            AGENTS
          </a>
          <a href="#" className="block px-3 py-2 text-[#666666] hover:text-[#40A0A0] font-medium">
            AGENCIES
          </a>
          <a href="#" className="block px-3 py-2 text-[#666666] hover:text-[#40A0A0] font-medium">
            NOTIFICATION
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

