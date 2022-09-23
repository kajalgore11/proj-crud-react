
import './App.css';
// import Post from 'post'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar';
import Add  from './components/add';
import Edit from './components/exit';
import Home from './components/home';
// import contactReducer from './reducers/contactReducer';

function App() {
  return (
 
    <div className="App">
      <Router>
      <ToastContainer />
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/add'element={< Add />} />
        <Route exact path='/edit/:id' element={<Edit />} />
        {/* <Route path='/contactr' element={<contactReducer />} /> */}
        {/* <Route exact path='/edit/:id'><h2>hello3 edit</h2> </Route> */}
      </Routes>
      </Router>
    </div>
   
  );
}

export default App;
