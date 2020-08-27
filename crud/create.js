require('../connection')

const { modelSchema: User } = require('../models/user')

async function save() {
    const user = new User({
        username: 'Sulca97',
        password: 'Skull',
        date: new Date()
    })
    await user.save((err, document) => {
        if (err) console.log(err);
        console.log(document);
    })
}

save()