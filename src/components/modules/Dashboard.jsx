import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/card';
import { Home, FileText, Users, CreditCard, Coins } from 'lucide-react';
import { MENU_ITEMS } from '../../utils/constants';

export const Dashboard = () => {
  const navigate = useNavigate();
  const icons = { Home, FileText, Users, CreditCard, Coins };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {MENU_ITEMS.map((item) => {
        const Icon = icons[item.icon];
        return (
          <Card 
            key={item.id}
            className="cursor-pointer hover:bg-gray-50 p-6"
            onClick={() => navigate(item.route)}
          >
            <div className="flex flex-col items-center justify-center">
              <Icon className="h-12 w-12 mb-2" />
              <span className="text-lg font-semibold text-center">{item.title}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

