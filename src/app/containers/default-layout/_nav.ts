import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
]

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
        iconComponent: { name: 'cil-calendar' },
        children:[
          {
            name: 'Liste',
            url: '/rendez-vous/list'
          },
          {
            name: 'Tache & Commission',
            url: '/rendez-vous/task'
          },
          {
            name: 'Etat',
            url: '/rendez-vous/achievement'
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
        iconComponent: { name: 'cil-user' },
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
        iconComponent: { name: 'cil-task' },
        children:[
          {
            name: 'offre spécial',
            url: '/services/special-list'
          },
          {
            name: 'Services',
            url: '/service',
          },
        ]
      },
      {
        name: 'Statistique',
        url: '/statistique',
        iconComponent: { name: 'cil-graph' },
        children:[
          {
            name: 'Réservation',
            url: '/statistique/reservation'
          },
          {
            name: 'Chiffre d\'affaire',
            url: '/statistique/sales-volume'
          },
          {
            name: 'Horaire Employe',
            url: '/statistique/work-schedule'
          },
          {
            name: 'Depense',
            url: '/statistique/depense'
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
        iconComponent: { name: 'cil-calendar' },
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
        title: true,
        name: 'Preference'
      },
      {
        name: 'Preference',
        url: '/preference',
        iconComponent: { name: 'cil-heart' }
      }
    ]
  }

  return items;
}