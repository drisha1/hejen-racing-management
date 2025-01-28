export const ROUTES = {
    DASHBOARD: '/',
    ASSETS: '/assets',
    CONTRACTS: '/contracts',
    PAYMENTS: '/payments',
    TENANTS: '/tenants',
  };
  
  export const MENU_ITEMS = [
    {
      id: 'payments',
      title: 'ايصال الدفع',
      icon: 'CreditCard',
      route: ROUTES.PAYMENTS,
    },
    {
      id: 'debts',
      title: 'مديونية المستاجرين',
      icon: 'Coins',
      route: '/debts',
    },
    {
      id: 'contracts',
      title: 'عقود الايجار',
      icon: 'FileText',
      route: ROUTES.CONTRACTS,
    },
    {
      id: 'tenants',
      title: 'المستاجرون',
      icon: 'Users',
      route: ROUTES.TENANTS,
    },
    {
      id: 'assets',
      title: 'الاصول',
      icon: 'Home',
      route: ROUTES.ASSETS,
    },
  ];
  