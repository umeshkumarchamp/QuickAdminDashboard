import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBook, faUserGraduate, faChalkboardTeacher, faCog } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/LOGO.png";
import adminPhoto from "../../assets/LOG.jpg";

const Sidebar = ({ isOpen, closeSidebar }) => {
    return (
        <div
            className={`fixed h-full md:relative z-50 top-0 left-0 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden transition-all duration-100 md:w-64`}
            style={{
                background: 'linear-gradient(to bottom right, #0A3C4E, #0F2027)',
                boxShadow: '2px 0 10px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <button className="md:hidden absolute top-4 right-4 text-white focus:outline-none z-10" onClick={closeSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className={`p-4 relative z-10 ${isOpen ? 'block' : 'hidden'} md:block flex-grow`}>
                <div className="mb-4 text-center">
                    <img src={logo} alt="Company Logo" className="w-20 mx-auto mb-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300" />
                    <h2 className="text-xl text-white font-bold">Quick Computer Institute</h2>
                </div>
                <hr className="border-t border-gray-500 mb-4" />
                <ul className='font-semibold px-4'>
                    <li className="py-2 ">
                        <NavLink
                            exact
                            to="/"
                            className={({ isActive }) => 
                                `text-white flex items-center rounded-lg px-4 py-1 transition-all duration-300 transform ${isActive ? 'bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] shadow-2xl scale-110' : 'hover:bg-gradient-to-r hover:from-[#ff416c] hover:to-[#ff4b2b] hover:shadow-lg hover:scale-105'}`
                            }
                            onClick={closeSidebar}
                        >
                            <FontAwesomeIcon icon={faTachometerAlt} className="mr-3 text-lg" />
                            <span className="flex-1">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="py-2 ">
                        <NavLink
                            to="/courses"
                            className={({ isActive }) => 
                                `text-white flex items-center rounded-lg px-4 py-1 transition-all duration-300 transform ${isActive ? 'bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] shadow-2xl scale-110' : 'hover:bg-gradient-to-r hover:from-[#ff416c] hover:to-[#ff4b2b] hover:shadow-lg hover:scale-105'}`
                            }
                            onClick={closeSidebar}
                        >
                            <FontAwesomeIcon icon={faBook} className="mr-3 text-lg" />
                            <span className="flex-1">Courses</span>
                        </NavLink>
                    </li>
                    <li className="py-2 ">
                        <NavLink
                            to="/students"
                            className={({ isActive }) => 
                                `text-white flex items-center rounded-lg px-4 py-1 transition-all duration-300 transform ${isActive ? 'bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] shadow-2xl scale-110' : 'hover:bg-gradient-to-r hover:from-[#ff416c] hover:to-[#ff4b2b] hover:shadow-lg hover:scale-105'}`
                            }
                            onClick={closeSidebar}
                        >
                            <FontAwesomeIcon icon={faUserGraduate} className="mr-3 text-lg" />
                            <span className="flex-1">Students</span>
                        </NavLink>
                    </li>
                    <li className="py-2 ">
                        <NavLink
                            to="/instructors"
                            className={({ isActive }) => 
                                `text-white flex items-center rounded-lg px-4 py-1 transition-all duration-300 transform ${isActive ? 'bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] shadow-2xl scale-110' : 'hover:bg-gradient-to-r hover:from-[#ff416c] hover:to-[#ff4b2b] hover:shadow-lg hover:scale-105'}`
                            }
                            onClick={closeSidebar}
                        >
                            <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3 text-lg" />
                            <span className="flex-1">Instructors</span>
                        </NavLink>
                    </li>
                    <li className="py-2 ">
                        <NavLink
                            to="/settings"
                            className={({ isActive }) => 
                                `text-white flex items-center rounded-lg px-4 py-1 transition-all duration-300 transform ${isActive ? 'bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] shadow-2xl scale-110' : 'hover:bg-gradient-to-r hover:from-[#ff416c] hover:to-[#ff4b2b] hover:shadow-lg hover:scale-105'}`
                            }
                            onClick={closeSidebar}
                        >
                            <FontAwesomeIcon icon={faCog} className="mr-3 text-lg" />
                            <span className="flex-1">Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="p-8 text-center text-white mt-auto">
                <div className="bg-gradient-to-r from-blue-800 to-green-600 rounded-lg p-4 shadow-lg transform hover:scale-105 transition duration-300">
                    <img src={adminPhoto} alt="Admin" className="w-16 h-16 mx-auto mb-2 rounded-full shadow-md" />
                    <p className="text-sm font-bold">Welcome, Admin</p>
                    <p className="text-xs mt-2">Logged in as Administrator</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

