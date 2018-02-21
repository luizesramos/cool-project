import {greetUser} from "../../src/service/Greeter";

describe('Greeter integration test', () => {

    const JASMINE_ORIGINAL_TIMEOUT = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeAll(() => {
        console.log('Jasmine default test timeout: ', jasmine.DEFAULT_TIMEOUT_INTERVAL, 'ms');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });

    afterAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = JASMINE_ORIGINAL_TIMEOUT;
        console.log('Jasmine default test timeout: ', jasmine.DEFAULT_TIMEOUT_INTERVAL, 'ms');
    });

    it('should say hello and not timeout', (done: DoneFn) => {
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

