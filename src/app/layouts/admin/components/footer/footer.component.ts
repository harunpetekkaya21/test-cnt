import { Component } from '@angular/core';
import { AdminLayoutService } from '../../services/admin.layout.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public layoutService: AdminLayoutService) { }
}
