import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"

function HomePage() {
  return (
        <div className="flex flex-col items-center justify-center">
            <MagnifyingGlassCircleIcon className="h-64 w-64 text-cyan-600/20" 
            />
            <h1 className="text-3xl text-center mt-2 text-black font-bold mb-5">
                Welcome to the Amazon Web Scraper App
            </h1>
        </div>
  )
}

export default HomePage