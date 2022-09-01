// import logo from './logo.svg';
import './App.css';
import Ui1 from './UI/Ui1/Ui1';
import Ui2 from './UI/Ui2/Ui2';
import Ui3 from './UI/Ui3/Ui3';
import Ui4 from './UI/Ui4/Ui4';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
       
      <Routes>
<Route path='/' element={<Ui1 />} />
<Route path='/ui2' element={<Ui2 />} />
<Route path='/ui3' element={<Ui3 />} />
<Route path='/ui4' element={<Ui4 />} />
      </Routes>
      
      
      </div>
  );
}

export default App;
