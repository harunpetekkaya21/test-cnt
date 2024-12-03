import { Component, OnInit } from '@angular/core';
import { AdminLayoutService } from '../../services/admin.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{
  model: any[] = [];

  constructor(public layoutService: AdminLayoutService) { }

  ngOnInit() {
      this.model = [
          {
              label: '',
              items: [
                  { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
              ]
          },

          {
              label: '',
              icon: '',
              items: [
                 
                  {
                      label: 'Facilities',
                      icon: 'pi pi-fw pi-building',
                      items: [
                          {
                              label: 'Facility List',
                              icon: 'pi pi-fw pi-list',
                              routerLink: ['/facility/facility-list']
                          },
                          {
                              label: 'Create New Facility',
                              icon: 'pi pi-fw pi-plus-circle',
                              routerLink: ['/facility/facility-create']
                          },
                          
                      ]
                  },
                 
              ]
          },

          {
            label: '',
            icon: '',
            items: [
               
                {
                    label: 'Rooms',
                    icon: 'pi pi-fw pi-image',
                    items: [
                        {
                            label: 'Room List',
                            icon: 'pi pi-fw pi-list',
                            routerLink: ['/room/room-list']
                        },
                        {
                            label: 'Create New Room',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/room/room-create']
                        },
                        
                    ]
                },
               
            ]
        },

        // {
        //     label: '',
        //     icon: '',
        //     items: [
               
        //         {
        //             label: 'Contracts',
        //             icon: 'pi pi-fw pi-file-edit',
        //             items: [
        //                 {
        //                     label: 'Contract List',
        //                     icon: 'pi pi-fw pi-list',
        //                     routerLink: ['/contract/contract-create']
        //                 },
        //                 {
        //                     label: 'Create New Contract',
        //                     icon: 'pi pi-fw pi-plus-circle',
        //                     routerLink: ['/contract/contract-list']
        //                 },
                        
        //             ]
        //         },
               
        //     ]
        // },
        
      ];
  }
}
