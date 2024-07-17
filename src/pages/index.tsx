// src/pages/index.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AccountForm from '../components/AccountForm';
import TransactionForm from '../components/TransactionForm';
import AccountBalance from '../components/AccountBalance';

const Home: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Aplicación Bancaria</h1>
        <AccountForm />
        <TransactionForm />
        <AccountBalance />
      </div>
    </Provider>
  );
};

export default Home;
