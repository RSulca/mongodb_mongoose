const mongoose = require('mongoose');

const uri = 'mongodb://localhost/test01';
const db = mongoose.connection;

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).catch( err => console.log(err) );

db.once('open', ()=>{ 
    console.log('Connected to '+uri);
})

db.on('error', (err)=>{
    console.log(err);
})

