import React from 'react';
import TnxAppBar from './components/TnxAppBar';
import TnxBalanceCard from './components/TnxBalanceCard';
import TnxQuickActions from './components/TnxQuickActions';
import TnxRecentTransactions from './components/TnxRecentTransactions';

const TnxHomePage = () => {
  return (
    <>
      <TnxAppBar />
      <div style={{ padding: '20px 16px 0 16px' }}>
        <TnxBalanceCard />
        <TnxQuickActions />
        <TnxRecentTransactions />
      </div>
    </>
  );
};

export default TnxHomePage; 