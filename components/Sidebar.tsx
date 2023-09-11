import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"

function Sidebar() {
  return (
    <div>
        <div>
        <MagnifyingGlassCircleIcon className="h-16 md:w-16 text-cyan-600" />

        <h1 className="hidden md:inline text-3xl mt-2">Web Scraper</h1>
        <h2>Scraping the Web, One Byte at a Time!</h2>
        </div>

        <ul>

        </ul>
    </div>
  )
}

export default Sidebar