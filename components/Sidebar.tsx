import React from 'react'
import Link from 'next/link'
import { BotMessageSquare, PencilLine, SearchIcon } from 'lucide-react'


const Sidebar = () => {
    return (
        <div className='bg-white text-white p-5'>
            <ul className='gap-5 flex lg:flex-col'>
                <li className='flex-1'>
                    <Link href={"/create-chatbot"} className='hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-blue-500'>
                        <BotMessageSquare className="h-6 w-6 lg:h-8 lg:w-8" />
                        <div className="hidden md:inline">
                            <p className="text-xl">Create</p>
                            <p className="text-sm font-extralight">New Chatbot</p>
                        </div>
                    </Link>
                </li>
                <li className='flex-1'>
                    <Link href={"/view-chatbot"} className='hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-blue-500'>
                        <PencilLine className="h-6 w-6 lg:h-8 lg:w-8" />
                        <div className="hidden md:inline">
                            <p className="text-xl">Create</p>
                            <p className="text-sm font-extralight">New Chatbot</p>
                        </div>
                    </Link>
                </li>
                <li className='flex-1'>
                    <Link href={"/review-sessions"} className='hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-blue-500'>
                        <SearchIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                        <div className="hidden md:inline">
                            <p className="text-xl">Create</p>
                            <p className="text-sm font-extralight">New Chatbot</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar