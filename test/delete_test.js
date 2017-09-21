const assert = require('assert');
const Bookmark = require('../api/models/bookmarkModel');

describe('Deleting a user', () => {
    let joe;

    beforeEach((done) => {
       joe = new Bookmark({ url: 'Joe' });
        joe.save()
        .then(() => done());
    });
        it('model instance remove', (done) => {
            joe.remove()
            .then(() => Bookmark.findOne({ url: 'Joe' }))
            .then((bookmark) => {
                assert(bookmark === null);
                done();
            });
        });

        it('class method remove', (done) => {
            Bookmark.remove({ url: 'Joe' })
            .then(() => Bookmark.findOne({ url: 'Joe' }))
            .then((bookmark) => {
                assert(bookmark === null);
                done();
            });
        });

        it('class method findAndRemove', (done) => {
            Bookmark.findOneAndRemove({ url: 'Joe' })
            .then(() => Bookmark.findOne({ url: 'Joe' }))
            .then((bookmark) => {
                assert(bookmark === null);
                done();
            });
        });

        it('class method findByIdAndRemove', (done) => {
            Bookmark.findByIdAndRemove(joe._id)
            .then(() => Bookmark.findOne({ url: 'Joe' }))
            .then((bookmark) => {
                assert(bookmark === null);
                done();
            });
        });


    });
