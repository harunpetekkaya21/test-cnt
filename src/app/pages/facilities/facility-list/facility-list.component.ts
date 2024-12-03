import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Customer, Representative } from '../domain/customer';

import { Table } from 'primeng/table';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrl:'facility-list.component.scss'
})
export class FacilityListComponent implements OnInit{

  facility1: Customer[] = [];
  selectedfacility1: Customer[] = [];
  
  activityValues: number[] = [0, 100];
  statuses: any[] = [];

  loading: boolean = true;
  @ViewChild('filter') filter!: ElementRef;
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => {
      this.facility1 = customers;
      this.loading = false;

      // @ts-ignore
      //this.facility1.forEach(customer => customer.date = new Date(customer.date));

      

    this.statuses = [
        { label: 'Ok', value: 'ok' },
        { label: 'Not-ok', value: 'not-ok' }
       
    ];
  });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}

clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
}

}
