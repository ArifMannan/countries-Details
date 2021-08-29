const shop = {
    name : 'newshop',
    address : 'dhaka',
    mobile :{
        mobilename :'samsung',
        price :20000,
    },
    type : 'electric'
};
console.log(shop);
const getshop = JSON.stringify(shop);
console.log(getshop);
const uncovered = JSON.parse(getshop);
console.log(uncovered);