import * as React from 'react';
import { Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from "./pages/Home";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />}/>
     </Routes>
    </div>
  );
}

export default App;
