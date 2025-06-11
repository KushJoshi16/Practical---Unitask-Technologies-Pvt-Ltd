const fs = require('fs');

function getInputData(fileName = 'input.json') {
    const data = fs.readFileSync(fileName, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData;
}

const {Products, Pricing, Categories} = getInputData('input.json');

const priceMap = Object.fromEntries(Pricing.map(p => [p.sku, p.price]));


const ProductsWithPriceIncluded = Products.map(product => {
    const price = priceMap[product.sku] || 0;
    return {
        ...product,
        price: price
    }
});

console.log('Products with price included:', ProductsWithPriceIncluded);
