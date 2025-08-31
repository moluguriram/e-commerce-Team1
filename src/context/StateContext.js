import React, { createContext, useContext, useReducer, useEffect } from 'react';

const StateContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: {
    name: '',
    mobile: '',
    security: '',
    accessibility: '',
  },
  addresses: [],
  walletBalance: 0,
  orders: [
    { id: 1, status: 'Delivered', items: [{ name: 'Noise Cancelling Headphones', price: '₹3,499' }] },
    { id: 2, status: 'Shipped', items: [{ name: 'Smartphone 5G', price: '₹19,999' }] },
  ],
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false };
    case 'ADD_ADDRESS':
      return { ...state, addresses: [...state.addresses, action.payload] };
    case 'UPDATE_WALLET':
      return { ...state, walletBalance: state.walletBalance + action.payload };
    case 'UPDATE_USER':
        return { ...state, user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState, (initial) => {
    const localData = localStorage.getItem('appState');
    return localData ? JSON.parse(localData) : initial;
  });

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
