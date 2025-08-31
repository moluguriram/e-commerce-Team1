import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', { email, password, confirmPassword });
  };

  return (
    <div style={styles.container}>
      <style>{`
        @media (max-width: 768px) {
          .signup-card {
            width: 90%;
            padding: 1.5rem;
          }
        }
      `}</style>
      <div style={styles.card} className="signup-card">
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              style={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
        <p style={styles.text}>
          Already have an account? <Link to="/login" style={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 60px)', // Adjust based on navbar height
    backgroundColor: '#f0f2f5',
    padding: '2rem 0',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    width: '400px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formGroup: {
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#555',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#ffffff',
    padding: '0.9rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginTop: '1.5rem',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  text: {
    marginTop: '1.5rem',
    color: '#666',
  },
  link: {
    color: '#28a745',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Signup;
