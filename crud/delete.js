require('../connection')

const { modelSchema: Product } = require('../models/model')

async function deleteMany() {
    // const result = await Product.deleteMany({name: 'Cocina'});
    const result = await Product.findOneAndDelete({name: 'TV'});

    console.log(result);
}

deleteMany()