import { Component, OnInit } from '@angular/core';
import { RoomTypeService } from './services/roomTypeservice';
import { MenuItem } from 'primeng/api';



export interface RoomType {
  id?: number;
  name?: string;
  odaSayisi?: number;
  odaKapasitesi?: number;
  yetiskinKapasitesi?: number;
  cocukKapasitesi?: number;
  gecelikBaseFiyat?: number;

}

interface PlusMinus {
  name: string;
  code: string;
}


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent implements OnInit {
  visible: boolean = false;
  position: string = 'center';

  //Rooms
  roomTypes!: RoomType[];

  odaSayisi: number = 0;
  odaKapasitesi: number = 2;
  yetiskinKapasitesi: number = 2;
  cocukKapasitesi: number = 0;
  gecelikBaseFiyat: number = 7000;

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;



  //Room Type Modal
  value: string | undefined;


  plusMinuses: PlusMinus[] | undefined;
  selectedPlusMinus:  PlusMinus={ name: '+', code: '1' };

  constructor(private roomTypeService: RoomTypeService) {

  }

  ngOnInit() {
    this.plusMinuses = [
      { name: '+', code: '1' },
      { name: '-', code: '2' }
    
  ];
    this.roomTypeService.getProductsMini().then((data) => {
      this.roomTypes = data;
    });

    this.items = [
      { icon: 'pi pi-home', route: '/' },
      { label: 'Room Types' },
      { label: 'Room Type List', route: '/inputtext' },

    ];
  }

  onChangeYetiskinKapasitesi(event:any) {
    // console.log(event.value);
    this.odaKapasitesi=event.value
    
   
  }


  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }



}
