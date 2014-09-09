var xamel = require('./index');

/* global describe, it */
describe('things falling appart', function () {
    it('should fulfill a promise if there was a ~correct xml string passed', function (done) {
        xamel.parse('<root></root>').then(
            function () {
                done();
            },
            function (reason) {
                done(reason);
            }
        );
    });

    it('should reject a promise if the string passed contained incorrect XML', function (done) {
        xamel.parse('lorem ipsum').then(
            function () {
                done(new Error('Incorrect XML was passed. The promise was fulfilled none the less.'));
            },
            function () {
                done();
            }
        );
    });

    it('should reject a promise if the string was empty', function (done) {
        xamel.parse('').then(
            function () {
                done(new Error('Incorrect XML was passed. The promise was fulfilled none the less.'));
            },
            function () {
                done();
            }
        );
    });
});
