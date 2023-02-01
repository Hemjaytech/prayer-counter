import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Router>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
