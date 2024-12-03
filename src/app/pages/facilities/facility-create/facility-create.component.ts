import { Component, OnInit } from '@angular/core';

export class Country{
  name:string;
  code:string;
}

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrl: './facility-create.component.scss'
})
export class FacilityCreateComponent implements OnInit {
 

  facilityTypes: any[] | undefined;
  selectedFacilityType: any = null;

  countries: Country[] = [];
  selectedCountry: string | undefined;

  selectedState: any = null;
  states: any[] | undefined;

  selectedCity: any = null;
  cities: any[] | undefined;

  currencies:any[]|undefined;
  selectedCurrency:string|undefined;


  ngOnInit() {
    this.countries = [
      { name: 'Turkey', code: 'TR' },
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
    ];

    this.facilityTypes = [
      { name: 'Hotel', code: '1' },
      { name: 'Pansion', code: '2' },
      { name: 'Motel', code: '3' },
      { name: 'Apartment', code: '4' },
      { name: 'Resort', code: '5' },
  
    ];

    this.states = [
      { name: 'State 1', code: '1' },
      { name: 'State 2', code: '2' },
      { name: 'State 3', code: '3' },
      { name: 'State 4', code: '4' },
      { name: 'State 5', code: '5' },
      { name: 'State 6', code: '6' },
      { name: 'State 7', code: '7' },
      { name: 'State 8', code: '8' },
      { name: 'State 9', code: '9' },
      { name: 'State 10', code: '10' },
    ],
    this.currencies=[
      { name: 'USD', code: '1' },
      { name: 'EURO', code: '2' },
      { name: 'POUND 3', code: '3' },
    ]

    this.cities=[
      { name: 'City 1', code: '1' },
      { name: 'City 2', code: '2' },
      { name: 'City  3', code: '3' },
    ]
  }





}
