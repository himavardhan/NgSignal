import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AssetService {
    private assets = signal<PropertyData[]>([]);
    getAssets() {
        return this.assets();
    }

    addAsset(asset: PropertyData) {
        this.assets.update(currentAssets => [...currentAssets, asset]);
    }

    clearAssets() {
        this.assets.set([]);
    }
}

export type PropertyData = {
  propertyName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
}


