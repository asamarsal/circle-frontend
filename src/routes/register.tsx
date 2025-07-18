import React, { useState } from 'react';
import iconCircle from '../assets/images/circle.png';
import '../assets/styles/register.css';
import '../assets/styles/global.css';

import { NavLink, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface RegisterFormData {
  username: string;
  full_name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {

  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    full_name: '',
    email: '',
    password: ''
  });

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
      console.log('Registration successful:', data);

      navigate('/login', { 
        state: { showSuccessAlert: true },
        replace: true
      });
      
    } else {
        console.error('Registration failed:', data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container-black mt-12">
      <div className="content-container">
        {showAlert && (
          <Alert className="mb-4 border-green-500 text-green-500">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Account berhasil dibuat! Mengarahkan ke login...
            </AlertDescription>
          </Alert>
        )}
        <img className="register-heading" src={iconCircle} alt="Circle" />
        <h2 className="text-heading text-3xl font-bold mt-5">Create Account Circle</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="input-field bg-white mt-5"
              type="text"
              name="full_name"
              placeholder="Full Name*"
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="input-field bg-white mt-5"
              type="text"
              name="username"
              placeholder="Username*"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="input-field bg-white mt-3"
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="input-field bg-white mt-3"
              type="password"
              name="password"
              placeholder="Password*"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button className='bg-[#04A51E] hover:bg-[#008616] text-white w-full py-2 px-4 rounded-full mt-3 cursor-pointer' type="submit">Create</button>
          <p className='decoration-text mt-3'>Already Have Account?<NavLink to="/login" className='decoration-text' style={{ color: '#04A51E', textDecoration: 'none' }}>Login</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default Register;