require('./connection')

const { modelSchema: Product } = require('./models/model')

async function save() {
    const product = new Product({
        name: 'Headphone',
        description: 'Skull',
        price: 75
    })
    await product.save((err, document) => {
        if (err) console.log(err);
        console.log(document);
    })
}

save()


