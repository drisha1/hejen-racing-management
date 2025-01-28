import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export const AssetForm = () => {
  const navigate = useNavigate();
  const [assets, setAssets] = useLocalStorage('assets', []);
  const [newAsset, setNewAsset] = useState({
    assetNumber: '',
    type: '',
    reference: '',
    location: '',
    area: '',
    rentalValue: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAssets([...assets, { ...newAsset, id: Date.now() }]);
    navigate('/assets');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">إضافة أصل جديد</h2>
      <div className="space-y-4">
        <Input
          placeholder="رقم الاصل"
          value={newAsset.assetNumber}
          onChange={(e) => setNewAsset({...newAsset, assetNumber: e.target.value})}
          required
        />
        <Input
          placeholder="النوع"
          value={newAsset.type}
          onChange={(e) => setNewAsset({...newAsset, type: e.target.value})}
          required
        />
        <Input
          placeholder="مرجع الاصل"
          value={newAsset.reference}
          onChange={(e) => setNewAsset({...newAsset, reference: e.target.value})}
          required
        />
        <Input
          placeholder="الموقع"
          value={newAsset.location}
          onChange={(e) => setNewAsset({...newAsset, location: e.target.value})}
          required
        />
        <Input
          placeholder="المساحة"
          value={newAsset.area}
          onChange={(e) => setNewAsset({...newAsset, area: e.target.value})}
          required
        />
        <Input
          placeholder="قيمة الايجار"
          value={newAsset.rentalValue}
          onChange={(e) => setNewAsset({...newAsset, rentalValue: e.target.value})}
          required
        />
        <Input
          placeholder="الملاحظات"
          value={newAsset.notes}
          onChange={(e) => setNewAsset({...newAsset, notes: e.target.value})}
        />
        <div className="flex gap-2">
          <Button type="submit">حفظ</Button>
          <Button 
            type="button"
            variant="outline" 
            onClick={() => navigate('/assets')}
          >
            إلغاء
          </Button>
        </div>
      </div>
    </form>
  );
};
