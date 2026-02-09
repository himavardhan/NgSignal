import { Component, effect, inject } from '@angular/core';
import { SharedModule } from '../../../SharedModules/SharedModule';
import { AssetService, PropertyData } from '../../../services/assetservice';

@Component({
  selector: 'app-property-list',
  imports: [SharedModule],
  templateUrl: './property-list.html',
  styleUrl: './property-list.scss',
  standalone: true,
})
export class PropertyList {

  private assetService = inject(AssetService);
  assets: PropertyData[] = this.assetService.getAssets();

  constructor() {
    effect(() => {
      this.assets = this.assetService.getAssets();
    });
  }

}
