// src/components/AccountForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAccount } from '../redux/accountSlice';

const AccountForm: React.FC = () => {
  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [initialBalance, setInitialBalance] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createAccount({ name, accountNumber, initialBalance }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Número de Cuenta"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Saldo Inicial"
        value={initialBalance}
        onChange={(e) => setInitialBalance(Number(e.target.value))}
        required
      />
      <button type="submit">Crear Cuenta</button>
    </form>
  );
};

export default AccountForm;

