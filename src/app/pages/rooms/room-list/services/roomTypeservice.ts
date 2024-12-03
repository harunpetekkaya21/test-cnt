import { Injectable } from '@angular/core';
    
@Injectable({
    providedIn:'root'
})
export class RoomTypeService {
    getProductsData() {
        return [
            {
                id: 1000,
                name: "Superior Sea View",
                odaSayisi: 100,
                odaKapasitesi: 60,
                yetiskinKapasitesi: 30,
                cocukKapasitesi: 10,
                gecelikBaseFiyat: 1600
            },
            {
                id: 1001,
                name: "Deluxe Garden View",
                odaSayisi: 80,
                odaKapasitesi: 40,
                yetiskinKapasitesi: 25,
                cocukKapasitesi: 15,
                gecelikBaseFiyat: 1400
            },
            {
                id: 1002,
                name: "Royal Ocean Suite",
                odaSayisi: 50,
                odaKapasitesi: 25,
                yetiskinKapasitesi: 40,
                cocukKapasitesi: 5,
                gecelikBaseFiyat: 2500
            },
            {
                id: 1003,
                name: "Standard Mountain View",
                odaSayisi: 120,
                odaKapasitesi: 80,
                yetiskinKapasitesi: 50,
                cocukKapasitesi: 20,
                gecelikBaseFiyat: 1000
            },
            {
                id: 1004,
                name: "Penthouse Suite",
                odaSayisi: 10,
                odaKapasitesi: 5,
                yetiskinKapasitesi: 60,
                cocukKapasitesi: 0,
                gecelikBaseFiyat: 3500
            },
            {
                id: 1005,
                name: "Junior Suite",
                odaSayisi: 70,
                odaKapasitesi: 35,
                yetiskinKapasitesi: 20,
                cocukKapasitesi: 10,
                gecelikBaseFiyat: 1800
            },
            {
                id: 1006,
                name: "Family Suite",
                odaSayisi: 50,
                odaKapasitesi: 30,
                yetiskinKapasitesi: 35,
                cocukKapasitesi: 15,
                gecelikBaseFiyat: 2000
            },
            {
                id: 1007,
                name: "Executive Room",
                odaSayisi: 40,
                odaKapasitesi: 20,
                yetiskinKapasitesi: 15,
                cocukKapasitesi: 5,
                gecelikBaseFiyat: 2200
            },
            {
                id: 1008,
                name: "Honeymoon Suite",
                odaSayisi: 30,
                odaKapasitesi: 15,
                yetiskinKapasitesi: 2,
                cocukKapasitesi: 0,
                gecelikBaseFiyat: 2800
            },
            {
                id: 1009,
                name: "Oceanfront Room",
                odaSayisi: 90,
                odaKapasitesi: 50,
                yetiskinKapasitesi: 30,
                cocukKapasitesi: 10,
                gecelikBaseFiyat: 1700
            }
           
        ];
    }


    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

   
};