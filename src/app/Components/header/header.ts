import { UserDetails } from './../../services/user-details';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../services/layoutservice';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';


@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule,StyleClassModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,
})
export class Header {
  userName = '';
  items!: MenuItem[];
  constructor(private userDetails: UserDetails,public layoutService: LayoutService) {
    this.userName = this.userDetails.getUserName().toUpperCase();
  }

 
  toggleDarkMode() {
      this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }
}
