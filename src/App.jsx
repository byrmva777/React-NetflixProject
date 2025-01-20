import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing/Landing";
import themeStore from "./common/Store";
import Login from './pages/login/Login';
import NotFound from "./common/NotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/signup/SignUp';
import Homepage from './pages/homepage/Homepage';

const App = () => {
  const theme = themeStore((state) => state.theme);
  const accessToken = themeStore((state) => state.accessToken);

  return (
    <div 
      className={`h-full min-h-screen w-full ${
        theme === "light" ? "bg-white" : "bg-zinc-500"
      } transition duration-300 ease-in-out`}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Homepage />} />
          
        </Routes>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
