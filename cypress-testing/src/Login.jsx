import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem('auth', 'true');
      navigate('/search');
    } else {
      alert('Invalid login');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-lg font-bold">Login</h2>
      <input className="block border p-2 w-full my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="block border p-2 w-full my-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-600 text-white p-2" onClick={handleLogin}>Login</button>
    </div>
  );
}
