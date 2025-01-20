import React from 'react';
import { useFormData } from '../../components/FormData';
import { useNavigate } from 'react-router-dom'; 
import NetFlixBG from "../../../assets/NetFlixBG.jpg";
import NetflixLogo from "../../../assets/NetflixLogo.png";
import { Link } from 'react-router-dom';
import Navbar from '../../homepage/components/Navbar';

export const signUp = async (formData) => {
    const response = await fetch('http://localhost:5001/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Xəta baş verdi.');
    }
  
    return response.json(); 
};

const SignUpForm = () => {
  const { formData, setFormData, error, setError, success, setSuccess, handleChange } = useFormData();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const data = await signUp(formData);
      setSuccess('Account created successfully!');
      setFormData({ username: '', email: '', password: '' });
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="relative text-white h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${NetFlixBG})` }}
    >
   
      <div className="w-full px-[5rem] fixed top-0 left-0 z-50">
        <Navbar />
      </div>
      

      <div className="flex-grow flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-black/90 backdrop-blur-sm p-10 w-96 flex flex-col space-y-6 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="p-3 bg-gray-800 rounded text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 bg-gray-800 rounded text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-3 bg-gray-800 rounded text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white text-lg p-3 rounded font-semibold tracking-wide"
          >
            Sign Up
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
