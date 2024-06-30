import React from 'react'
import Header from '@/components/Header';
import '@/app/globals.css';
import Sidebar from '@/components/Sidebar';
interface Props {
    // children: React.ReactNode;
    children: JSX.Element;
}

const AdminLayout = ({ children }: Props) => {
    return (
        <div className='flex flex-col flex-1'>
            <Header />
            <div className='flex flex-col lg:flex-row bg-gray-100'>

                <Sidebar />
                {/* Sidebar */}

                <div className='flex-1 flex justify-center lg:justify-start items-start max-w-5xl mx-auto w-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout