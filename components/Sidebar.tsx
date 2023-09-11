import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid"

function Sidebar() {
  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b" 
         style={{borderColor: '#A9BD93'}}>
        <div className="flex flex-col items-center justify-center mb-10">
        <MagnifyingGlassCircleIcon className="h-16 md:w-16" style={{color: '#A9BD93'}} />
        <h1 className="hidden md:inline text-center text-3xl mt-2 mb-2 font-bold">Web Scraper</h1>
        <h2 className="hidden md:inline text-center text-xs italic">Scraping the Web, One Byte at a Time!</h2>
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