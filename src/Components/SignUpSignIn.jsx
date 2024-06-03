import React, { useState } from 'react';
import { useUserCart } from '../Context/UserCartContext';
import '../Styles/SignUpSignIn.css';
import '../Styles/Common.css';

const SignUpSignIn = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser } = useUserCart();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username,
      password,
      cart: [],
      favorites: [],
      previousPurchases: []
    };

    if (isSignUp) {
      const response = await fetch('http://localhost:3000/Users');
      const users = await response.json();
      const userExists = users.some(u => u.username === username);

      if (userExists) {
        alert('Username already taken. Please chose a different one.');
      } else {
        const signUpResponse = await fetch('http://localhost:3000/Users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });
        if (signUpResponse.ok) {
          const newUser = await signUpResponse.json();
          setCurrentUser(newUser);
          alert('User signed up successfully!');
          onClose();
        } else {
          alert('Failed to sign up');
        }
      }
    } else {
      const response = await fetch('http://localhost:3000/Users');
      const users = await response.json();
      const userFound = users.find(
        (u) => u.username === username && u.password === password
      );

      if (userFound) {
        setCurrentUser(userFound);
        alert('Sign-in successful!');
        onClose();
      } else {
        alert('Invalid username or password');
      }
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className="overlay">
      <div className="signin-form">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>{isSignUp ? 'SIGN UP' : 'SIGN IN'}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">{isSignUp ? 'SIGN UP' : 'SIGN IN'}</button>
        </form>
        <button className="toggle-signup" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'ALREADY A MEMBER? LOGIN HERE' : 'NOT A MEMBER? SIGN UP HERE'}
        </button>
      </div>
    </div>
  );
};

export default SignUpSignIn;