import { Component } from '@angular/core';
import { SharedModule } from '../../SharedModules/SharedModule';


@Component({
  selector: 'app-assets',
  imports: [SharedModule],
  templateUrl: './assets.html',
  standalone: true
})
export class Assets {
  value: string = '';
  addProperty(){
    console.log('Add Property button clicked');
  }
  clearForm(){
    this.value = '';
    console.log('Clear button clicked, form reset');
  }
   
}
