import { Menu } from '@headlessui/react'; // Import Menu component from @headlessui/react

const Sidebar = ({ isOpen, closeSidebar }) => {

    
    return (
        <div className={`fixed h-full md:relative z-50 top-0 left-0 ${isOpen ? 'w-64' : 'w-0'} bg-gray-800 text-white overflow-hidden transition-all duration-300 md:w-64`}>
            <button className="md:hidden absolute top-4 right-4 text-white focus:outline-none" onClick={closeSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                <ul>
                    <li className="py-2">Dashboard</li>
                    <li className="py-2">Courses</li>
                    <li className="py-2">Students</li>
                    <li className="py-2">Instructors</li>
                    <li className="py-2">Settings</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
