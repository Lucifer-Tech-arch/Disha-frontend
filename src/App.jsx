import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import { ToastContainer } from 'react-toastify';
import Assessment from './Pages/Assessment';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Assessbegain from './Pages/Assessbegain.jsx';
import Scrolltotop from './components/Scrolltotop'
import Colleges from './Pages/Colleges.jsx';
import ChatBot from './Components/ChatBot.jsx';
import Recommandations from './Pages/Recommandations.jsx';

const App = () => {
  return (
    <div className='sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <Scrolltotop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/assessment' element={<Assessbegain />}/>
        <Route path='/assessment/questions' element={<Assessment/>}/>
        <Route path='/results' element={<Recommandations/>}/>
        <Route path='/colleges' element={<Colleges/>}/>
      </Routes>
      <ChatBot />
      <Footer />
    </div>
  )
}

export default App
