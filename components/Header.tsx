'use client'

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"
import { FormEvent, useRef } from "react" 

function Header() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const input = inputRef.current?.value;
        if (!input) return;

        if (inputRef.current?.value) {
            inputRef.current.value = '';
        }

        try {
            // Call our API to activate the Scraper
        } catch (error) {
            // Handle any errors
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
