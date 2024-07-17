// src/components/AccountBalance.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const AccountBalance: React.FC = () => {
  const balance = useSelector((state: RootState) => state.account.balance);

  return (
    <div>
      <h2>Balance Actual: ${balance}</h2>
    </div>
  );
};

export default AccountBalance;
