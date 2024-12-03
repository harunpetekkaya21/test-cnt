import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrl: './room-create.component.scss'
})
export class RoomCreateComponent {
  visible: boolean = false;
  //Room Type Modal
  value: string | undefined;


  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
   

    this.items = [
      { icon: 'pi pi-home', route: '/' },
      { label: 'Room Types' },
      { label: 'Create New Room Type', route: '/inputtext' },
      
    ];
  }
}
