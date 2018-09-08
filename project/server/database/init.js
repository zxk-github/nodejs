const mongoose = require('mongoose');
const db = 'mongodb://localhost/mk';
mongoose.Promise = global.Promise;

exports.connect = () => {
    let maxConnectTimes = 0;
    new Promise((resolve, reject) => {
        if(process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
    
        mongoose.connect(db);
    
        mongoose.connection.on('disconnected', () => {
            maxConnectTimes ++ ;
            if(maxConnectTimes < 5) {
                mongoose.connect(db);
            } else {
                throw new Error('mongo 挂了');
            }
        })
    
        mongoose.connection.on('error', err => {
            reject(err);
            console.log(err);
        })
    
        mongoose.connection.once('open', () => {

            /*
            const Dog = mongoose.model('dog', {
                name: String
            })

            const doga = new Dog({
               name: 'doga' 
            })

            doga.save().then(() => {
                console.log('wang')
            })
            */

            resolve()
            console.log('mongodb connect success')
        })
    })
   
}

