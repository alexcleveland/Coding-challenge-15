// Task 1 Create the Asset Module

const assets =[
    {id: 1, name: `Publix`, type: `stock`, price: 18.00, quanity: 100},
    {id: 2, name: `Walmart`, type: `stock`, price: 52.00, quanity: 20},
    {id: 3, name: `Government Bank`, type: `bonds`, price: 31.00, quanity: 50},
    {id: 4, name: `Ford`, type: `stock`, price: 200.00, quanity: 1000},
];
function getAssetById(id){
    return assets.find(asset => asset.id === id);
}
module.exports ={assets, getAssetById};

