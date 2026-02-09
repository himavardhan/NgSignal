import { Component, OnInit,inject } from '@angular/core';
import { email } from '@angular/forms/signals';
import { TabsModule } from 'primeng/tabs';
import { AssetService } from '../../services/assetservice';
import { PropertyList } from '../assets/property-list/property-list';


@Component({
  selector: 'app-dashboard',
  imports: [TabsModule, PropertyList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {

  tabs = [
    { title: 'Dashboard', value: '0',  component: 'Dashboard' },
    { title: 'Properties', value: '1', component: 'Property' },
    { title: 'Contact Us', value: '2', component: 'ContactUsComponent' }
];

users = [{
  id:1,
  name:"John Doe",
  email:"john@gmail.com"
},
{
  id:2,
  name:"Himavardhan",
  email:"hima@gmail.com"
}
]

  assets = inject(AssetService).getAssets();
  constructor() { }

  ngOnInit(): void {
    console.log('Assets in Dashboard:', this.assets);
  }

}
