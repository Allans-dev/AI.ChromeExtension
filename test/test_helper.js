const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost/Senecadb'); // localhost is replaced by port on remote servers
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('warning', error);
    });
});



beforeEach((done) => {
    mongoose.connection.collections.bookmarks.drop(() => {
        // ready to run the next test
        done();
    });
});
