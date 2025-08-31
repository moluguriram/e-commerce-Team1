import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const NavBar = ({ cart }) => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const totalItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    if (!value.trim()) {
      setSuggestions([]);
      return;
    }
    const filtered = products
      .filter((p) => p.title.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);
    setSuggestions(filtered);
  };

  const handleSuggestionClick = (title) => {
    setSearchText(title);
    setSuggestions([]);
  };

  return (
    <header style={styles.navbar}>
      <style>{`
        .navbar-search input:focus {
            outline: 3px solid #febd69;
            outline-offset: -1px;
            z-index: 10;
        }
        .search-button:hover { background-color: #f3a847; }
        
        .nav-link {
          color: white;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          padding: 5px;
          border: 1px solid transparent;
          border-radius: 4px;
          transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
          position: relative;
          background-color: transparent; /* Default background */
          box-shadow: none; /* Default shadow */
        }
        .nav-link:hover {
          border-color: white;
          background-color: #3a475a; /* Light background on hover */
          box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Soft shadow on hover */
        }

        .navbar-logo:hover { border-color: white; }
        .dropdown-content {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #232f3e;
          min-width: 200px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }
        .dropdown-content a {
          color: white;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }
        .dropdown-content a:hover {background-color: #1a2430;}
        .nav-link-dropdown:hover .dropdown-content {display: block;}
        .back-button:hover { background-color: #3a475a; }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
            padding: 10px;
          }
          .navbar-content {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }
          .navbar-search {
            width: 100%;
          }
          .navbar-nav {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
          }
          .nav-link {
            width: 100%;
            padding: 8px 0;
          }
        }
      `}</style>
      <div style={styles.navbarContent}>
        <button onClick={() => navigate(-1)} style={styles.backButton} className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <Link to="/" style={styles.navbarLogo}>Shopify</Link>
        <div style={styles.navbarSearch} className="navbar-search">
          <input type="text" placeholder="Search Shopify..." value={searchText} onChange={handleSearchChange} style={styles.searchInput} />
          <button style={styles.searchButton} className="search-button" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          {suggestions.length > 0 && (
            <ul style={styles.searchResults} className="search-suggestions">
              {suggestions.map((s) => (
                <li key={s.id} onClick={() => handleSuggestionClick(s.title)} style={styles.searchResultItem}>{s.title}</li>
              ))}
            </ul>
          )}
        </div>
        <nav style={styles.navbarNav}>
          <div style={styles.navLink} className="nav-link nav-link-dropdown">
            <span style={styles.navLineOne}>Hello, Sign in</span>
            <span style={styles.navLineTwo}>Account & Lists</span>
            <div className="dropdown-content">
              <Link to="/orders">Your Orders</Link>
              <Link to="/account/login-security">Login & Security</Link>
              <Link to="/account/address">Your Address</Link>
              <Link to="/account/payment">Payment Options</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
          <Link to="/orders" style={styles.navLink}>
            <span style={styles.navLineOne}>Returns</span>
            <span style={styles.navLineTwo}>& Orders</span>
          </Link>
           <Link to="/admin" style={styles.navLink}>
            <span style={styles.navLineOne}>Admin</span>
            <span style={styles.navLineTwo}>Dashboard</span>
          </Link>
          <Link to="/cart" style={{...styles.navLink, ...styles.navCart}}>
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span style={styles.cartCount}>{totalItems}</span>
            <span style={{...styles.navLineTwo, ...styles.cartText}}>Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 25px',
    backgroundColor: '#232f3e',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    gap: '20px',
    borderBottom: '1px solid #1a2430',
  },
  navbarContent: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '20px',
  },
  backButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    padding: '5px',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarLogo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    padding: '5px',
    border: '1px solid transparent',
    borderRadius: '4px',
    transition: 'border-color 0.2s ease',
    cursor: 'pointer',
  },
  navbarSearch: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    maxWidth: '800px',
  },
  searchInput: {
    width: '100%',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px 0 0 4px',
    fontSize: '1rem',
    cursor: 'text',
    color: 'black', // Fix for invisible text
  },
  searchButton: {
    padding: '0 12px',
    backgroundColor: '#febd69',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#111',
    transition: 'background-color 0.2s',
  },
  searchResults: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'white',
    color: 'black',
    border: '1px solid #ddd',
    borderTop: 'none',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    zIndex: 101,
    borderRadius: '0 0 4px 4px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  searchResultItem: {
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '0.95rem',
  },
  navbarNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    border: '1px solid transparent',
    borderRadius: '4px',
    transition: 'border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  navLineOne: {
    fontSize: '0.75rem',
    color: '#ccc',
  },
  navLineTwo: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  navCart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: '5px',
  },
  cartCount: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#febd69',
    position: 'relative',
    bottom: '12px',
    right: '20px',
  },
  cartText: {
    position: 'relative',
    bottom: '2px',
  },
};

export default NavBar;
