import { useState, useEffect } from 'react';
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
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={closeSidebar}
                    />
                )}

                {/* Header */}
                <div className="relative bg-gradient-to-r from-yellow-400 via-red-400 to-red-500 text-white h-16 md:h-16 flex items-center justify-between px-4 md:px-8 shadow-md">
                    <div className="absolute inset-0 opacity-70 z-0"></div>
                    {isMobile && (
                        <button className="md:hidden text-gray-800 focus:outline-none z-10" onClick={toggleSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    )}
                    <h2 className="text-xl font-bold text-gray-800 z-10">Quick Computer Institute</h2>
                    <div className="flex items-center z-10 space-x-4">
                        {/* Search Bar (Desktop Only) */}
                        {!isMobile && (
                            <input
                                type="text"
                                placeholder="Search..."
                                className="hidden md:block px-4 py-2 border rounded-md"
                            />
                        )}
                        {/* Notification Icon */}
                        {!isMobile && (
                            <button className="hidden md:block text-gray-800 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.33-5.102A5.985 5.985 0 006 11v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m1 4h4m-4-4v1a1 1 0 01-1 1h0a1 1 0 01-1-1v-1m6 0v1a1 1 0 01-1 1h0a1 1 0 01-1-1v-1" />
                                </svg>
                            </button>
                        )}
                        <Menu as="div" className="relative">
                            <Menu.Button className="focus:outline-none">
                                <img src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette.png" alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" />
                            </Menu.Button>
                            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="p-1 text-black">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button className={`${active && 'bg-gray-100'} p-2 w-full text-left`}>
                                                Profile
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button className={`${active && 'bg-gray-100'} p-2 w-full text-left`}>
                                                Settings
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button className={`${active && 'bg-gray-100'} p-2 w-full text-left`}>
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
