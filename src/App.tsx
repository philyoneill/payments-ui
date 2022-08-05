import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import TransactionSearchBar from './components/transactions/TransactionSearchBar';

function App() {
  return (
    <div>
      <Header />
      <TransactionSearchBar />
      
    </div>
  );
}

export default App;
