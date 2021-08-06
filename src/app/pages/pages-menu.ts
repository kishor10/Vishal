import { NbMenuItem } from '@nebular/theme';


export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    icon: 'home-outline',
    title: 'Home',
    link: '/pages/home',
  },
  {
    icon: 'home-outline',
    title: 'Dashboard',
    link: '/pages/dashboard',
  },
 
  {
    icon: 'shopping-cart',
    title: 'Sales',
    link: '/pages/sales',
  },

  {
    icon: 'home-outline',
    title: 'Reports',
    link: '/pages/report',
  },

  {
    icon: 'home-outline',
    title: 'Items',
    link: '/pages/items',
  },
  {
    icon: 'person-outline',
    title: 'Customers',
    link: '/pages/customers',
  },
  {
    icon: 'home-outline',
    title: 'Employee',
    link: '/pages/employee',
  },
  
  {
    icon: 'home-outline',
    title: 'Inventory Management',
    link: '/pages/inventory',
  },
  {
    icon: 'home-outline',
    title: 'Loyalty Management',
    link: '/pages/loyalty',
  },
  {
    icon: 'home-outline',
    title: 'Upload/Import File',
    link: '/pages/import-file',
  },
  {
    icon: 'home-outline',
    title: 'Download/Export File',
    link: '/pages/export-file',
  },
  {
    icon: 'home-outline',
    title: 'Notification',
    link: '/pages/notification',
  },
  {
    icon: 'pin-outline',
    title: 'Store',
    link: '/pages/store',
  },
  {
    icon: 'home-outline',
    title: 'Credits',
    link: '/pages/credits',
  },
  {
    icon: 'settings-outline',
    title: 'Account & Settings',
    link: '/pages/account',
  },
  
  {
    icon: 'home-outline',
    title: 'Tutorial',
    link: '/pages/tutorial',
  },
  
  {
    icon: 'home-outline',
    title: 'Warehouse',
    children: [
      {
        title: 'Create W/H',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Search W/H',
        link: '/pages/layout/tabs/tab1',
      },
      {
        title: 'Configure Printers',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Manage W/H',
        link: '/pages/layout/manage-wh',
      },
      {
        title: 'Capture W/H Running Cost',
        link: '/pages/layout/capture-running-cost',
      },
    ],
  },
  // {
  //   icon: 'pin-outline',
  //   title: 'Location',
  //   children: [
  //     {
  //       title: 'Create Dimension Definition',
  //       link: '/pages/layout/create-dimenstion-definition',
  //     },
  //     {
  //       title: 'Search Dimension Definition',
  //       link: '/pages/layout/search-dimenstion-definition',
  //     },
  //     {
  //       title: 'Create Restriction',
  //       link: '/pages/layout/create-restriction',
  //     },
  //     {
  //       title: 'Search Restriction',
  //       link: '/pages/layout/search-restriction',
  //     },
  //     {
  //       title: 'Create Location Hierarchy',
  //       link: '/pages/layout/create-location-hierarchy',
  //     },
  //     {
  //       title: 'Create Locations',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Search Locations',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Auto Generate Locations',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Upload Locations',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Create Location Storage Category',
  //       link: '/pages/layout/create-location-storage-category',
  //     },
  //     {
  //       title: 'Search Location Storage Category',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Generate Labels - Location Range',
  //       link: '/pages/layout/generate-label-location-range',
  //     },
  //     {
  //       title: 'Generate Labels - Selected Locations',
  //       link: '/pages/layout/stepper',
  //     },
  //   ],
  // },
  // {
  //   icon: 'book-outline',
  //   title: 'Primary Company',
  //   children: [
  //     {
  //       title: 'Create Primary Company',
  //       link: '/pages/layout/create-primary-company',
  //     },
  //     {
  //       title: 'Search Primary Company',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Create Packing Group',
  //       link: '/pages/layout/create-packing-group',
  //     },
  //     {
  //       title: 'Search Packing Group',
  //       link: '/pages/layout/create-packing-group',
  //     },
  //     {
  //       title: 'Map WHS',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Create Reason',
  //       link: '/pages/layout/create-reason',
  //     },
  //     {
  //       title: 'Search Reason',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Create Customer Type',
  //       link: '/pages/layout/create-customer-type',
  //     },
  //     {
  //       title: 'Search Customer Type',
  //       link: '/pages/layout/stepper',
  //     },
  //   ],
  // },
  // {
  //   icon: 'layers-outline',
  //   title: 'Supplier',
  //   children: [
  //     {
  //       title: 'Create Supplier',
  //       link: '/pages/layout/create-supplier',
  //     },
  //     {
  //       title: 'Search Supplier',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Create Supplier Lead Time',
  //       link: '/pages/layout/create-supplier-lead-time',
  //     },
  //     {
  //       title: 'Search Supplier Lead Time',
  //       link: '/pages/layout/stepper',
  //     }
  //   ],
  // },
  // {
  //   icon: 'person-outline',
  //   title: 'Customer',
  //   children: [
  //     {
  //       title: 'Create Customer',
  //       link: '/pages/layout/create-customer',
  //     },
  //     {
  //       title: 'Search Customer',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Create Additional Bill To Address',
  //       link: '/pages/layout/create-additional-bill-address',
  //     },
  //     {
  //       title: 'Search Additional Bill To Address',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Create Additional Ship To Address',
  //       link: '/pages/layout/create-additional-ship-address',
  //     },
  //     {
  //       title: 'Search Additional Ship To Address',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Customer Wise Days To Expiry',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Customer Wise Max Age',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Create W/H Wise Allocation Priority Rule',
  //       link: '/pages/layout/stepper',
  //     }
  //   ],
  // },
  // {
  //   icon: 'grid-outline',
  //   title: 'SKU',
  //   children: [
  //     {
  //       title: 'Create SKU',
  //       link: '/pages/layout/create-sku',
  //     },
  //     {
  //       title: 'Search SKU',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Manage SKU W/H Mapping',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Manage SKU Cost Bucket Mapping',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Manage SKU Supplier Mapping',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Upload W/H Wise SKU Attribute',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Search W/H Wise SKU Attribute',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Create SKU Category',
  //       link: '/pages/layout/create-sku-category',
  //     },
  //     {
  //       title: 'Search SKU Category',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Manage KIT Boms',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Manage SKU - Uom Mapping',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Create Storage Category',
  //       link: '/pages/layout/create-storage-category',
  //     },
  //     {
  //       title: 'Search Storage Category',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'SKU Labelling - SKU Wise',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'SKU Labelling - Pack Wise',
  //       link: '/pages/layout/stepper',
  //     }
  //   ],
  // },

];
