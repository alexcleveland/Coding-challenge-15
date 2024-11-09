// Task 3 Create the Transaction Module

import { assets, getAssetById } from './asset.js';

export class Transaction{
    constructor(assetId, type, quantity){
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.asset = getAssetById(assetId);
    }
execute() {
    if (!this.asset){
        throw new error (`Asset ID ${this.asset} not found`);
    }
    if (this.type === `buy`){
        this.asset.quantity += this.quantity;
    }else if (this.type === `sell`){
        if(this.asset.quantity < this.quantity){
        throw new error (`Insufficient quantity for sale of ${this.asset.name}`);
    }
    this.asset.quantity -= this.quantity;
}else {
    throw new error(`invalid type`);
}
console.log(`${this.quantity} of ${this.asset.name} ${this.type}ed. New quantity ${this.asset.quantity}`);

}}



