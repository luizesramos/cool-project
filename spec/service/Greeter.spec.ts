import {} from 'jasmine'
import * as greeter from '../../src/service/Greeter'

describe('greetUser', () => {

    beforeAll(done => {
        console.log('Jasmine default test timeout: ', jasmine.DEFAULT_TIMEOUT_INTERVAL);
    });

    it('should say hello', (done: DoneFn) => {


        const userName = 'test name';
        const result = greeter.greetUser(userName).then(result => {
            expect(result).toContain('Hello');
            expect(result).toContain(userName);
            expect(result).toContain('How are you');
            done();

        }).catch(err => {
            done.fail();
        });
    });

});