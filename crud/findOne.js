require('../connection')

const { modelSchema: User } = require('../models/user')

async function main() {
    const users = await User.findOne({username: 'Sulca7'})
    if(users){
        return users
    }
    return;
}

main().then(res => console.log(res)).catch(err => console.log(err))