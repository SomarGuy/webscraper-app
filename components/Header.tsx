'use client'

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react" 
import toast from "react-hot-toast/headless";

function Header() {
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const input = inputRef.current?.value;
        if (!input) return;

        const notification = toast.loading(`Starting a Scraper for: ${input}`);

        if (inputRef.current?.value) {
            inputRef.current.value = '';
        }

        try {
            
            
            const response = await fetch('/api/activateScraper', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ search: input }),

            });

            const { collection_id, start_eta } = await response.json();

            toast.success("Scraper Started Successfully", {
                id: notification,
            });

            router.push(`/search/${collection_id}`);
        } catch (error) {
            // Handle any errors
            toast.error("Whoops... Something Went Wrong!", {
                id: notification,
            })
        }

        // Wait for the response to come back
    };

  return (
    <header>
        <form 
        className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 max-w-md mx-auto"
        onSubmit={handleSearch} style={{backgroundColor: '#A9BD93'}}>
            <input 
            ref={inputRef}
            type="text"   
            placeholder="Search..."   
            className="flex-1 outline-none bg-transparent text-emerald-900 placeholder:text-emerald-900"
            />
            <button hidden>Search</button>
            <MagnifyingGlassCircleIcon className="h-6 w-6 text-emerald-900"/>
        </form>
    </header>
  )
}

export default Header
