'use client'

import { db } from "@/firebase";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid"
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarRow from "./SidebarRow";

function Sidebar() {

  const [snapshot, loading, error] = useCollection(
    query(collection(db, "searches"), orderBy("start_eta", "desc"))
  );

  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b" 
         style={{borderColor: '#A9BD93'}}>
        <div className="flex flex-col items-center justify-center mb-10">
        <MagnifyingGlassCircleIcon className="h-16 md:w-16" style={{color: '#A9BD93'}} />
        <h1 className="hidden md:inline text-center text-3xl mt-2 mb-2 font-bold">Web Scraper</h1>
        <h2 className="hidden md:inline text-center text-xs italic">Scraping the Web, One Byte at a Time!</h2>
        </div>
        <ul className="flex flex-col gap-2 py-2 overflow-x-auto">
          {snapshot?.docs.map((doc) => (
            <SidebarRow key={doc.id} doc={doc} />
          ))}
        </ul>
    </div>
  )
}

export default Sidebar