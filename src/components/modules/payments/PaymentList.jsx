import React from 'react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export const PaymentList = () => {
  const [payments] = useLocalStorage('payments', []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">ايصالات الدفع</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2 text-right">رقم الايصال</th>
              <th className="border p-2 text-right">المستأجر</th>
              <th className="border p-2 text-right">المبلغ</th>
              <th className="border p-2 text-right">التاريخ</th>
              <th className="border p-2 text-right">طريقة الدفع</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="border p-2">{payment.receiptNumber}</td>
                <td className="border p-2">{payment.tenantName}</td>
                <td className="border p-2">{payment.amount}</td>
                <td className="border p-2">{payment.date}</td>
                <td className="border p-2">{payment.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
