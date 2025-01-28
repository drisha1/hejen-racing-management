import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, Users, CreditCard, Coins } from 'lucide-react';
import { MENU_ITEMS } from '../../utils/constants';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const icons = { Home, FileText, Users, CreditCard, Coins };

  return (
    <nav className="bg-white shadow-sm mb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-8 rtl:space-x-reverse">
          {MENU_ITEMS.map((item) => {
            const Icon = icons[item.icon];
            const isActive = location.pathname === item.route;
            
            return (
              <div
                key={item.id}
                className={`flex items-center cursor-pointer py-4 px-2 border-b-2 hover:text-blue-600 hover:border-blue-600 ${
                  isActive 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500'
                }`}
                onClick={() => navigate(item.route)}
              >
                <Icon className="h-5 w-5 ml-2" />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;