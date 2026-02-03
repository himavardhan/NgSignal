import { UserDetails } from './../../services/user-details';
import { Component , AfterViewInit, ViewChild} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../services/layoutservice';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { TabsModule } from 'primeng/tabs';



@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule,StyleClassModule,TabsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,
})
export class Header implements AfterViewInit{
 
  userName = '';
  items!: MenuItem[];
  tabs = [
    { title: 'Dashboard', value: '0',  component: 'Dashboard',route:'dashboard' },
    { title: 'Assets Group', value: '1', component: 'Assets',route:'assets' },
    { title: 'Contact Us', value: '2', component: 'ContactUsComponent',route:'contactUs' }
];
  constructor(private userDetails: UserDetails,public layoutService: LayoutService) {
    console.log('User Details in Header:');
    this.userName = this.userDetails.getUserName().toUpperCase();
  }

  ngAfterViewInit() {
    // Add event listener to the button
    //this.myButton.nativeElement.addEventListener('click', this.onButtonClick);

  }

 
  toggleDarkMode() {
      this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }

  navigateToProfile() {
    //event.preventDefault();
    console.log('Navigating to profile page...');
    // Implement navigation to profile page
  }

  onTabChange(event: any) {
    console.log('Tab changed to:', event); // Logs the index of the selected tab
}

closeTab( tab: any) {
  console.log('Tab closed to:', tab);
}

}
