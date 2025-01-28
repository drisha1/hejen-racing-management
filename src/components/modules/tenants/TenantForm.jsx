import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export const TenantForm = () => {
  const navigate = useNavigate();
  const [tenants, setTenants] = useLocalStorage('tenants', []);
  const [newTenant, setNewTenant] = useState({
    name: '',
    personalNumber: '',
    phone1: '',
    address: '',
    phone2: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTenants([...tenants, { ...newTenant, id: Date.now() }]);
    navigate('/hejen-racing-management/tenants');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">إضافة مستأجر جديد</h2>
      <div className="space-y-4">
        <Input
          placeholder="الاسم"
          value={newTenant.name}
          onChange={(e) => setNewTenant({...newTenant, name: e.target.value})}
          required
        />
        <Input
          placeholder="الرقم الشخصي"
          value={newTenant.personalNumber}
          onChange={(e) => setNewTenant({...newTenant, personalNumber: e.target.value})}
          required
        />
        <Input
          placeholder="الهاتف 1"
          value={newTenant.phone1}
          onChange={(e) => setNewTenant({...newTenant, phone1: e.target.value})}
          required
        />
        <Input
          placeholder="العنوان"
          value={newTenant.address}
          onChange={(e) => setNewTenant({...newTenant, address: e.target.value})}
          required
        />
        <Input
          placeholder="الهاتف 2"
          value={newTenant.phone2}
          onChange={(e) => setNewTenant({...newTenant, phone2: e.target.value})}
        />
        <Input
          placeholder="الايميل"
          type="email"
          value={newTenant.email}
          onChange={(e) => setNewTenant({...newTenant, email: e.target.value})}
        />
        <div className="flex gap-2">
          <Button type="submit">حفظ</Button>
          <Button 
            type="button"
            variant="outline" 
            onClick={() => navigate('/hejen-racing-management/tenants')}
          >
            إلغاء
          </Button>
        </div>
      </div>
    </form>
  );
};