import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Menu } from '@headlessui/react'; // Import Menu component from @headlessui/react
import logo from "../../assets/LOGO.png";
const Sidebar = ({ isOpen, closeSidebar }) => {
    return (
        <div
            className={`fixed h-full md:relative z-50 top-0 left-0 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden transition-all duration-300 md:w-64`}
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596597937550-d10c69e6411f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
            <button className="md:hidden absolute top-4 right-4 text-white focus:outline-none z-10" onClick={closeSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className={`p-4 relative z-10 ${isOpen ? 'block' : 'hidden'} md:block`}>
                <div className="mb-8">
                    <img src={logo} alt="Company Logo" className="w-20 mx-auto mb-2" />
                    <h2 className="text-xl text-center text-white font-bold">Quick Computer Institute</h2>
                </div>
                <ul className='font-semibold'>
                    <li className="text-white py-2">
                        <Link to="/" onClick={closeSidebar}>Dashboard</Link>
                    </li>
                    <li className="text-white py-2">
                        <Link to="/courses" onClick={closeSidebar}>Courses</Link>
                    </li>
                    <li className="text-white py-2">
                        <Link to="/students" onClick={closeSidebar}>Students</Link>
                    </li>
                    <li className="text-white py-2">
                        <Link to="/instructors" onClick={closeSidebar}>Instructors</Link>
                    </li>
                    <li className="text-white py-2">
                        <Link to="/settings" onClick={closeSidebar}>Settings</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
