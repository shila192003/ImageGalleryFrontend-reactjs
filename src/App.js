import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import AdminDashBoard from './components/AdminDashboard';
import ImageList from './components/ImageList';
import AddImage from './components/AddImage';
function App() {
  return (
    <>
    <BrowserRouter>
       
      <div className="container-fluid1">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
      
          <Route path="/imagelist" element={<ImageList />} />
          <Route path="/login"  element={<Login />} />

          <Route path="/admin-dashboard"  element={<AdminDashBoard />} />
          <Route path="/imageupload"  element={<AddImage />} />
          </Routes>
      </div>
    
    </BrowserRouter>

    
</>
  );
}

export default App;
