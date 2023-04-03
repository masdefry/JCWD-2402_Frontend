import {Routes, Route} from 'react-router-dom';

// import Test from './Pages/Test/Test.jsx';
// import LandingPage from './Pages/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import Test from './Pages/Test/Test';
import State from './Pages/State/State';
import Funct from './Pages/Funct/Funct';
import NetworkCall from './Pages/NetworkCall/NetworkCall';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<LandingPage />} /> */}
        <Route path='/state' element={<State />} />
        <Route path='/test' element={<Test />} />
        <Route path='/funct' element={<Funct />} />
        <Route path='/networkcall' element={<NetworkCall />} />
      </Routes>
      
    </>
  );
}

export default App;
