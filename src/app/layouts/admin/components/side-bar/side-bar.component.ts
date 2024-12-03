import { Component, ElementRef } from '@angular/core';
import { AdminLayoutService } from '../../services/admin.layout.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  constructor(public layoutService: AdminLayoutService, public el: ElementRef) { }
}
