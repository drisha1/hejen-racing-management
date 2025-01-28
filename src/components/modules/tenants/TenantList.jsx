import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Plus } from 'lucide-react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export const TenantList = () => {
  const navigate = useNavigate();
  const [tenants] = useLocalStorage('tenants', []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">سجل المستأجرين</h2>
        <Button 
          onClick={() => navigate('/tenants/new')}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          إضافة مستأجر جديد
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2 text-right">الاسم</th>
              <th className="border p-2 text-right">الرقم الشخصي</th>
              <th className="border p-2 text-right">الهاتف 1</th>
              <th className="border p-2 text-right">العنوان</th>
              <th className="border p-2 text-right">الهاتف 2</th>
              <th className="border p-2 text-right">الايميل</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant.id}>
                <td className="border p-2">{tenant.name}</td>
                <td className="border p-2">{tenant.personalNumber}</td>
                <td className="border p-2">{tenant.phone1}</td>
                <td className="border p-2">{tenant.address}</td>
                <td className="border p-2">{tenant.phone2}</td>
                <td className="border p-2">{tenant.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};