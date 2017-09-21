const assert = require('assert');
const Bookmark = require('../api/models/bookmarkModel');

describe('Updating Records', () => {

    let joe;

    beforeEach((done) => {
       joe = new Bookmark({ url: 'Joe' });
        joe.save()
        .then(() => done());
    });

    function assertUrl(operation, done) {
        operation
            .then(() => Bookmark.find({}))
            .then((bookmarks) => {
                assert(bookmarks.length === 1);
                assert(bookmarks[0].url === 'Alex');
                done();
            });
    }

    it('instance type using set n save', (done) => {
        joe.set('url', 'Alex');
        assertUrl(joe.save(), done);
    });

    it('A model instance can update', (done) => {
        assertUrl(joe.update({ 'url': 'Alex' }), done);
    });

    it('A model class can update', (done) => {
        assertUrl(
            Bookmark.update({ url: 'Joe' }, { url: 'Alex'}),
            done
            );
    });

    it('A model class can update one record', (done) => {
        assertUrl(
            Bookmark.findOneAndUpdate({ url: 'Joe' }, { url: 'Alex' }),
            done
        );
    });

    it('A model class can find a record with ID and update', (done) => {
        assertUrl(
            Bookmark.findByIdAndUpdate(joe._id, { url: 'Alex' }),
            done
        );
    });



});
