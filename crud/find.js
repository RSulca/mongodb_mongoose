require('../connection')

const { modelSchema: Product } = require('../models/model')

async function main() {
    return await Product.find({name: 'Cocina'});
}

main().then(res => console.log(res)).catch(err => console.log(err))