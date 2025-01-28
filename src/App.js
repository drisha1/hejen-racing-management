import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './components/modules/Dashboard';
import { AssetList } from './components/modules/assets/AssetList';
import { AssetForm } from './components/modules/assets/AssetForm';
import { ContractList } from './components/modules/contracts/ContractList';
import { PaymentList } from './components/modules/payments/PaymentList';
import { TenantList } from './components/modules/tenants/TenantList';
import { TenantForm } from './components/modules/tenants/TenantForm';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assets" element={<AssetList />} />
          <Route path="/assets/new" element={<AssetForm />} />
          <Route path="/contracts" element={<ContractList />} />
          <Route path="/payments" element={<PaymentList />} />
          <Route path="/tenants" element={<TenantList />} />
          <Route path="/tenants/new" element={<TenantForm />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;