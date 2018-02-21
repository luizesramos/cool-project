import {} from 'jasmine'
import {greetUser} from '../../src/service/Greeter'

describe('greetUser', () => {

    beforeAll(() => {
        console.log('Jasmine default test timeout: ', jasmine.DEFAULT_TIMEOUT_INTERVAL, 'ms');
    });

    xit('should say hello', (done: DoneFn) => {
        const userName = 'test name';
        greetUser(userName).then(result => {
            expect(result).toContain('Hello');
            expect(result).toContain(userName);
            expect(result).toContain('How are you');
            done();

        }).catch(err => {
            done.fail();
        });
    });
});