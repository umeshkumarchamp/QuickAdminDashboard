
import Sidebar from '../src/Dashboard/components/Sidebar';
import Header from '../src/Dashboard/components/Header';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            {/* <MainContent /> */}
          </div>
          <Routes>



          </Routes>
        </div>
      </Router>
    </div>
  )
}
