import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Scrolltotop from './components/Scrolltotop';
import ChatBot from './Components/ChatBot.jsx';

// Pages
import Home from './Pages/Home.jsx';
import Assessment from './Pages/Assessment';
import Assessbegain from './Pages/Assessbegain.jsx';
import Recommandations from './Pages/Recommandations.jsx';
import Colleges from './Pages/Colleges.jsx';
import CareerPaths from './Pages/CareerPaths.jsx';
import Dashboard from './Pages/Dashboard';
import Courses from './Pages/Courses';
import Calendar from './Pages/Calendar';
import Settings from './Pages/Settings';
import Students from './Pages/Students';

const App = () => {
  return (
      <div className='min-h-screen flex flex-col'>
        <ToastContainer position="top-right" autoClose={5000} />
        <Navbar />
        <Scrolltotop />
        <main className='flex-grow sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-16'>
          <Routes>
            <Route path='/' element={<Home/>} />
            
            <Route path="/assessment" element={
                   <Assessbegain />
         
            } />
            
            <Route path="/assessment/questions" element={
          
                <Assessment />
              
            } />
            
            <Route path="/dashboard" element={
         
                <Dashboard />
              
            } />
            
            <Route path="/results" element={
          
                <Recommandations />
              
            } />
            
            <Route path="/colleges" element={
            
                <Colleges />
              
            } />
            
            <Route path="/careerpaths" element={
              
                <CareerPaths />
              
            } />
            
            <Route path="/dashboard" element={
           
                <Dashboard />
           
            } />
            
            <Route path="/courses" element={
            
                <Courses />
            
            } />
            
            <Route path="/calendar" element={
              
                <Calendar />
              
            } />
            
            <Route path="/settings" element={
             
                <Settings />
              
            } />
            
            <Route path="/students" element={
              
                <Students />
            
            } />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <ChatBot />
        <Footer />
      </div>
  );
}

export default App
