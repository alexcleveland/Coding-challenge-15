// Task 2 Create the Portfolio Module

import { assets } from './asset.js';

export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset =>({
        name: asset.name, 
        allocation:((asset.price * asset.quantity)/totalValue)*100
    }));
}

module.exports = { calculatePortfolioValue, getPortfolioAllocation};
