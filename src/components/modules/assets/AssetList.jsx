import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Plus } from 'lucide-react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export const AssetList = () => {
  const navigate = useNavigate();
  const [assets] = useLocalStorage('assets', []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">سجل الاصول</h2>
        <Button 
          onClick={() => navigate('/hejen-racing-management/assets/new')}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          إضافة أصل جديد
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2 text-right">رقم الاصل</th>
              <th className="border p-2 text-right">النوع</th>
              <th className="border p-2 text-right">مرجع الاصل</th>
              <th className="border p-2 text-right">الموقع</th>
              <th className="border p-2 text-right">المساحة</th>
              <th className="border p-2 text-right">قيمة الايجار</th>
              <th className="border p-2 text-right">الملاحظات</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id}>
                <td className="border p-2">{asset.assetNumber}</td>
                <td className="border p-2">{asset.type}</td>
                <td className="border p-2">{asset.reference}</td>
                <td className="border p-2">{asset.location}</td>
                <td className="border p-2">{asset.area}</td>
                <td className="border p-2">{asset.rentalValue}</td>
                <td className="border p-2">{asset.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
