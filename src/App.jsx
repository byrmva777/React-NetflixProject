import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing/Landing";
import { useStore } from "zustand";
import { themeStore } from "./common/Store";
import NotFound from "./common/NotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { accessToken, theme } = useStore(themeStore);

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
