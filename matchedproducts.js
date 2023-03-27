const products = [
    {id:1, name: 'OnePlus9R Phone' , price: 37500},
    {id:2, name: 'OnePlus9RT Phone' , price: 43500},
    {id:3, name: 'Google Pixel Phone' , price: 41500},
    {id:4, name: 'Samsung s22 ultra phone' , price: 37500},
]

function matchedProducts (products, search){
    const matched = [];
    for (const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'Phone');
console.log(result);


