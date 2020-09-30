import React, { useReducer } from 'react';
import { reducer, initialState, Context } from './Context/Context'
import './App.css';
import CountryShowPage from './pages/CountryShowPage';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <CountryShowPage/>
    </Context.Provider>
  );
}

export default App;
