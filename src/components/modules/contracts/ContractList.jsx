import React, { useState } from 'react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { PlusCircle, Save } from 'lucide-react';

export const ContractList = () => {
  const [contracts, setContracts] = useLocalStorage('contracts', []);
  const [newContract, setNewContract] = useState({
    id: '',
    tenantName: '',
    assetNumber: '',
    contractNumber: '',
    leaseDuration: '',
    leaseType: '',
    startDate: '',
    endDate: '',
    value: '',
    paymentMethod: '',
    status: '',
    notes: ''
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContract(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (newContract.tenantName && newContract.contractNumber) {
      const contractWithId = {
        ...newContract,
        id: Date.now().toString()
      };
      setContracts(prev => [...prev, contractWithId]);
      setNewContract({
        id: '',
        tenantName: '',
        assetNumber: '',
        contractNumber: '',
        leaseDuration: '',
        leaseType: '',
        startDate: '',
        endDate: '',
        value: '',
        paymentMethod: '',
        status: '',
        notes: ''
      });
      setIsAdding(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">سجل عقود الايجار</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          disabled={isAdding}
        >
          <PlusCircle size={20} />
          <span>إضافة عقد</span>
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2 text-right">اسم المستأجر</th>
              <th className="border p-2 text-right">رقم الاصل</th>
              <th className="border p-2 text-right">رقم العقد</th>
              <th className="border p-2 text-right">مدة الايجار</th>
              <th className="border p-2 text-right">نوع الايجار</th>
              <th className="border p-2 text-right">تاريخ بداية العقد</th>
              <th className="border p-2 text-right">تاريخ نهاية العقد</th>
              <th className="border p-2 text-right">القيمة الايجارية</th>
              <th className="border p-2 text-right">آلية الدفع</th>
              <th className="border p-2 text-right">الحالة</th>
              <th className="border p-2 text-right">الملاحظات</th>
              {isAdding && <th className="border p-2 text-right">حفظ</th>}
            </tr>
          </thead>
          <tbody>
            {isAdding && (
              <tr>
                <td className="border p-1">
                  <input
                    name="tenantName"
                    value={newContract.tenantName}
                    onChange={handleInputChange}
                    className="w-full p-1 text-right"
                    placeholder="اسم المستأجر"
                  />
                </td>
                <td className="border p-1">
                  <input
                    name="assetNumber"
                    value={newContract.assetNumber}
                    onChange={handleInputChange}
                    className="w-full p-1 text-right"
                    placeholder="رقم الاصل"
                  />
                </td>
                <td className="border p-1">
                  <input
                    name="contractNumber"
                    value={newContract.contractNumber}
                    onChange={handleInputChange}
                    className="w-full p-1 text-right"
                    placeholder="رقم العقد"
                  />
                </td>
                <td className="border p-1">
                  <input
                    name="leaseDuration"
                    value={newContract.leaseDuration}
                    onChange={handleInputChange}
                    className="w-full p-1 text-right"
                    placeholder="مدة الايجار"
                  />
                </td>
                <td className="border p-1">
                  <input
                    name="leaseType"
                    value={newContract.leaseType}
                    onChange={handleInputChange}
                    className="w-full p-1 text-right"
                    placeholder="نوع الايجار"
                  />
                </td>
                <td className="border p-1">
                  <input
                    type="date"
                    name="startDate"
                    value={newContract.startDate}
                    onChange={handleInputChange}
                    className="w-full p-1 text-right"
                  />
                </td>
                <td className="border p-1">
                  <input
                    type="date"
                    name="endDate"
                    value={newContract.endDate}
                    onChange={handleInputChange}
                    className="w-full p-1 text-right"
                  />
                </td>
                <td className="border p-1">
                  <input
                    name="value"
                    value={newContract.value}
                    onChange={handleInputChange}
                    className="w-full p-1 text-right"
                    placeholder="القيمة"
                  />
                </td>
                <td className="border p-1">
                  <input
                    name="paymentMethod"
                    value={newContract.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full p-1 text-right"
                    placeholder="آلية الدفع"
                  />
                </td>
                <td className="border p-1">
                  <input
                    name="status"
                    value={newContract.status}
                    onChange={handleInputChange}
                    className="w-full p-1 text-right"
                    placeholder="الحالة"
                  />
                </td>
                <td className="border p-1">
                  <input
                    name="notes"
                    value={newContract.notes}
                    onChange={handleInputChange}
                    className="w-full p-1 text-right"
                    placeholder="الملاحظات"
                  />
                </td>
                <td className="border p-1">
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 w-full flex items-center justify-center gap-2"
                  >
                    <Save size={16} />
                    <span>حفظ</span>
                  </button>
                </td>
              </tr>
            )}
            {contracts.map((contract) => (
              <tr key={contract.id}>
                <td className="border p-2">{contract.tenantName}</td>
                <td className="border p-2">{contract.assetNumber}</td>
                <td className="border p-2">{contract.contractNumber}</td>
                <td className="border p-2">{contract.leaseDuration}</td>
                <td className="border p-2">{contract.leaseType}</td>
                <td className="border p-2">{contract.startDate}</td>
                <td className="border p-2">{contract.endDate}</td>
                <td className="border p-2">{contract.value}</td>
                <td className="border p-2">{contract.paymentMethod}</td>
                <td className="border p-2">{contract.status}</td>
                <td className="border p-2">{contract.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContractList;