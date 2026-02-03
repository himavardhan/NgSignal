import { Component, OnInit } from '@angular/core';
import { email } from '@angular/forms/signals';
import { TabsModule } from 'primeng/tabs';


@Component({
  selector: 'app-dashboard',
  imports: [TabsModule],
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

  constructor() { }

  ngOnInit(): void {
  }

}
