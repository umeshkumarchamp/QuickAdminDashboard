
import Sidebar from '../src/Dashboard/components/Sidebar';
import Header from '../src/Dashboard/components/Header';
import MainComponent from '../src/Dashboard/components/MainContent';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './Dashboard/pages/Courses';
import Students from './Dashboard/pages/Students';
import Instructors from './Dashboard/pages/Instructors';

export default function App() {
  return (
    <div>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <Routes>
              <Route path="/" element={<MainComponent />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/students" element={<Students />} />
              <Route path="/instructors" element={<Instructors />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}
