// src/components/TransactionForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit, withdraw } from '../redux/accountSlice';

const TransactionForm: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState('deposit');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (transactionType === 'deposit') {
      dispatch(deposit(amount));
    } else {
      dispatch(withdraw(amount));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        required
      />
      <select
        value={transactionType}
        onChange={(e) => setTransactionType(e.target.value)}
      >
        <option value="deposit">Depósito</option>
        <option value="withdraw">Retiro</option>
      </select>
      <button type="submit">Realizar Transacción</button>
    </form>
  );
};

export default TransactionForm;
