require('../connection')

const { modelSchema: User } = require('../models/user')

async function upMan() {
    const user = await User.findOne({username: 'Ricolas2'});
    user.password = 'Gaaaaaaaaaaa';
    user.save()
}

async function update(data) {
    const up = await User.update({username: 'Sulca97'}, data)
    if(up){
        return up
    }
    return;
}

update( { username: 'Ricolas2', password: 'Vamos' } ).then(res => console.log(res)).catch(err => console.log(err))
// upMan();