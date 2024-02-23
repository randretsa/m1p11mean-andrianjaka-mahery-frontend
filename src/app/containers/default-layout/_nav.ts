import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'User'
  },
  {
    name: 'users',
    url: '',
    iconComponent: { name: 'cil-drop' },
    children:[
      {
        name: 'users-list',
        url: '/users/user-list'
      },
      {
        name: 'user-detail',
        url: '/users/user-details',
      }
    ]
  },
  {
    name: 'Services',
    url: '/service',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Client',
    url: '/client',
    iconComponent: { name: 'cil-drop' },
    children: [
      {
        name: 'Prendre',
        url: '/client/prendre'
      },
      {
        name: 'Historique',
        url: '/client/historique'
      },
      {
        name: 'Détail',
        url: '/client/detail'
      }
    ]
  },
  {
    name: 'Employe',
    url: '/employe',
    iconComponent: { name: 'cil-drop' },
    children: [
      {
        name: 'Liste',
        url: '/employe/liste'
      },
      {
        name: 'Tache',
        url: '/employe/tache'
      }
    ]
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion'
      },
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Cards',
        url: '/base/cards'
      },
      {
        name: 'Carousel',
        url: '/base/carousel'
      },
      {
        name: 'Collapse',
        url: '/base/collapse'
      },
      {
        name: 'List Group',
        url: '/base/list-group'
      },
      {
        name: 'Navs & Tabs',
        url: '/base/navs'
      },
      {
        name: 'Pagination',
        url: '/base/pagination'
      },
      {
        name: 'Placeholder',
        url: '/base/placeholder'
      },
      {
        name: 'Popovers',
        url: '/base/popovers'
      },
      {
        name: 'Progress',
        url: '/base/progress'
      },
      {
        name: 'Spinners',
        url: '/base/spinners'
      },
      {
        name: 'Tables',
        url: '/base/tables'
      },
      {
        name: 'Tabs',
        url: '/base/tabs'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns'
      }
    ]
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control'
      },
      {
        name: 'Select',
        url: '/forms/select'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios'
      },
      {
        name: 'Range',
        url: '/forms/range'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels'
      },
      {
        name: 'Layout',
        url: '/forms/layout'
      },
      {
        name: 'Validation',
        url: '/forms/validation'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },
      {
        name: 'Badges',
        url: '/notifications/badges'
      },
      {
        name: 'Modal',
        url: '/notifications/modal'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'py-0'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/templates/installation',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank', class: '-text-dark' },
    class: 'mt-auto'
  },
  {
    name: 'Try CoreUI PRO',
    url: 'https://coreui.io/product/angular-dashboard-template/',
    iconComponent: { name: 'cil-layers' },
    attributes: { target: '_blank' }
  }
];

export const customNavItems = (userPrivilege: string): INavData[] => {
  let items: INavData[] = [];    
  if(userPrivilege == 'EMPLOYEE'){
    items = [
      {
        title: true,
        name: 'Rendez-vous'
      },
      {
        name: 'Rendez-vous',
        url: '/rendez-vous',
        iconComponent: { name: 'cil-drop' },
        children:[
          {
            name: 'Liste',
            url: '/rendez-vous/list'
          },
          {
            name: 'Tache & Commission',
            url: '/rendez-vous/task'
          }
        ]
      }
    ]
  } else if(userPrivilege == 'MANAGER'){
    items = [
      {
        title: true,
        name: 'Gestion des personnels'
      },
      {
        name: 'employée',
        url: '/users',
        iconComponent: { name: 'cil-drop' },
        children:[
          {
            name: 'liste des employées',
            url: '/users/user-list'
          }
        ]
      },
      {
        name: 'services',
        url: '/services',
        iconComponent: { name: 'cil-drop' },
        children:[
          {
            name: 'offre spécial',
            url: '/services/special-list'
          }
        ]
      },
      {
        name: 'Statistique',
        url: '/statistique',
        iconComponent: { name: 'cil-drop' },
        children:[
          {
            name: 'Réservation',
            url: '/statistique'
          }
        ]
      },
    ]
  }
  else if(userPrivilege =='CLIENT'){
    items = [
      {
        title: true,
        name: 'Rendez-vous'
      },
      {
        name: 'Rendez-vous',
        url: '/rendez-vous',
        iconComponent: { name: 'cil-drop' },
        children:[
          {
            name: 'Prendre',
            url: '/rendez-vous/prendre'
          },
          {
            name: 'Historique',
            url: '/rendez-vous/historique',
          }
        ]
      },
      {
        name: 'Preference',
        url: '/preference',
        iconComponent: { name: 'cil-drop' }
      }
    ]
  }

  return items;
}