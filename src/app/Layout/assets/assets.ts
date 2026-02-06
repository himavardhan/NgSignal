import { Component } from '@angular/core';
import { SharedModule } from '../../SharedModules/SharedModule';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-assets',
  imports: [SharedModule],
  templateUrl: './assets.html',
  standalone: true
})
export class Assets {
  value: string = '';
  propertyName = new FormControl('');
  addProperty(){
    console.log('Add Property button clicked');
  }
  clearForm(){
    this.value = '';
    console.log('Clear button clicked, form reset');
  }
   
}
