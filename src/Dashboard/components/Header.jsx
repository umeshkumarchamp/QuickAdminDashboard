import React, { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react'; // Import Menu component from @headlessui/react
import Sidebar from './Sidebar'; // Import Sidebar component

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Call the function once to set initial state
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* Sidebar component */}
            {isMobile && (
                <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
            )}

            {/* Header component */}
            <div className="relative">
                {/* Overlay */}
                {isMobile && isOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-50"
                        onClick={closeSidebar}
                    />
                )}

                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-16 md:h-20 flex items-center justify-between px-4 md:px-8 shadow-lg relative z-50">
                    {isMobile && (
                        <button className="md:hidden text-white focus:outline-none" onClick={toggleSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    )}
                    <h2 className="text-xl font-bold">Quick Computer Institute</h2>
                    <div className="flex items-center">
                        <Menu as="div" className="relative">
                            <Menu.Button className="focus:outline-none">
                                <img src="profile-image.jpg" alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" />
                            </Menu.Button>
                            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="p-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button className={`${active && 'bg-gray-100'}`}>
                                                Profile
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button className={`${active && 'bg-gray-100'}`}>
                                                Settings
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button className={`${active && 'bg-gray-100'}`}>
                                                Logout
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
