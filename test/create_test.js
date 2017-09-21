const assert = require('assert');
const Bookmark = require('../api/models/bookmarkModel');

describe('Creating records', () => {
    it('saves a user', (done) => {
        const joe = new Bookmark ({ url: 'Joe' });

        joe.save()
            .then(() => {
                // has joe been saved successfully
                assert(!joe.isNew);
                done();
        });
    });
});

// string is test name
