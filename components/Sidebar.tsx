import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"

function Sidebar() {
  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-cyan-500/50
    ">
        <div className="flex flex-col items-center justify-center
        mb-10">
        <MagnifyingGlassCircleIcon className="h-16 md:w-16 text-cyan-600" />

        <h1 className="hidden md:inline text-3xl mt-2">Web Scraper</h1>
        <h2 className="hidden md:inline text-xs italic">Scraping the Web, One Byte at a Time!</h2>
        </div>

        <ul>
            {/* SidebarRow */}
            {/* SidebarRow */}
            {/* SidebarRow */}
            {/* SidebarRow */}
            {/* SidebarRow */}
            {/* SidebarRow */}
            {/* SidebarRow */}
        </ul>
    </div>
  )
}

export default Sidebar