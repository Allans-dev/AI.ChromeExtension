const assert = require('assert');
const Bookmark = require('../api/models/bookmarkModel');

describe('reading bookmarks from db', () => {
    let joe;

    beforeEach((done) => {
       joe = new Bookmark({ url: 'Joe' });
        joe.save()
        .then(() => done());
    });

    it('finds all bookmarks with url of Joe', (done) => {
        Bookmark.find({ url: 'Joe' })
            .then((bookmarks) => {
                assert(bookmarks[0]._id.toString() === joe._id.toString());
                done();
            });
    });

    it('find a bookmark for a particular id', (done) => {
        Bookmark.findOne({ _id: joe._id }) // mongoose knows how to deal with objectid on _id
        .then((bookmark) => {
            assert(bookmark.url === 'Joe')
            done();
        });
    });

});

// string is test url
