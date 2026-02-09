import { Component, signal ,inject} from '@angular/core';
import { SharedModule } from '../../SharedModules/SharedModule';
import { FormControl } from '@angular/forms';
import { AssetService, PropertyData } from '../../services/assetservice';
import { PropertyList } from './property-list/property-list';
@Component({
  selector: 'app-assets',
  imports: [SharedModule, PropertyList],
  templateUrl: './assets.html',
  standalone: true
})
export class Assets {
  value: string = '';
  propertyName = new FormControl('');
  initialData: PropertyData = {
    propertyName: '',
    addressLine1:'',
    addressLine2:'',
    city:'',
    state:'',
    zipCode:''
  };
  propertyData = signal<PropertyData>(this.initialData);
  assetService = inject(AssetService);

  addProperty(){
    console.log('Property Data:', this.propertyData());
    console.log('Add Property button clicked');
    this.assetService.addAsset(this.propertyData());
    this.clearForm();
  }

  updatePropertyField(field: keyof PropertyData, event: Event) {
  const value = (event.target as HTMLInputElement).value;
  this.propertyData.update(prev => ({ ...prev, [field]: value }));
}
  clearForm(){
    this.propertyData.set(this.initialData);
    console.log('Clear button clicked, form reset');
  }
   
}
