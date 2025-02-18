import { ChevronRight } from "lucide-react"

export function BreadcrumbNav() {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6 mt-1 ml-6">
      <a href="/" className="no-underline hover:text-gray-500">
        Home
      </a>
      <ChevronRight className="h-4 w-4" />
      <a href="#" className="no-underline hover:text-gray-500">
        Agent
      </a>
      <ChevronRight className="h-4 w-4" />
      <span className="text-[#666666]">Investor Profile/test_user</span>
    </nav>
  )
}
