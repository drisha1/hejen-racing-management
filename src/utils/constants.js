export const ROUTES = {
    DASHBOARD: '/hejen-racing-management/',
    ASSETS: '/hejen-racing-management/assets',
    CONTRACTS: '/hejen-racing-management/contracts',
    PAYMENTS: '/hejen-racing-management/payments',
    TENANTS: '/hejen-racing-management/tenants',
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
  