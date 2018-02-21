import {} from 'jasmine'
import {greetUser} from '../../src/service/Greeter'
import * as slowApi from '../../src/networking/SlowApi'

describe('greetUser', () => {

    beforeAll(() => {
        console.log('Jasmine default test timeout: ', jasmine.DEFAULT_TIMEOUT_INTERVAL, 'ms');
    });

    // this test will timeout, due to the "network latency"
    // it('should say hello', (done: DoneFn) => {
    //     const userName = 'test name';
    //     greetUser(userName).then(result => {
    //         expect(result).toContain('Hello');
    //         expect(result).toContain(userName);
    //         expect(result).toContain('How are you');
    //         done();
    //
    //     }).catch(err => {
    //         done.fail();
    //     });
    // });

    // this test will pass because we stubbed the network layer
    it('should return immediately', (done: DoneFn) => {
        spyOn(slowApi, "fetchGreeting").and.callFake((userName: string) => {
            return Promise.resolve('You suck,');
        });

        spyOn(slowApi, "fetchQuestion").and.callFake((userName: string) => {
            return Promise.resolve('You forgot your brownbag!');
        });

        const userName = 'Luiz';
        greetUser(userName).then(result => {
            console.log(result);
            expect(result).toContain('You suck');
            expect(result).toContain(userName);
            expect(result).toContain('brownbag');
            done();
        }).catch(err => {
            done.fail;
        });
    });

});