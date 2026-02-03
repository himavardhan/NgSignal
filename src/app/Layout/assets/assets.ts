import { Component } from '@angular/core';
import { SharedModule } from '../../SharedModules/SharedModule';


@Component({
  selector: 'app-assets',
  imports: [SharedModule],
  templateUrl: './assets.html',
  styleUrl: './assets.scss',
  standalone: true
})
export class Assets {

  addProperty(){
    console.log('Add Property button clicked');
  }
   
}
