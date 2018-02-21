import {} from 'jasmine'
import {greetUser} from '../../src/service/Greeter'
import * as slowApi from '../../src/networking/SlowApi'

describe('greetUser', () => {

    beforeAll(() => {
        console.log('Jasmine default test timeout: ', jasmine.DEFAULT_TIMEOUT_INTERVAL, 'ms');
    });

    //this test will timeout, due to the "network latency" requires a setTimeout
    // it('should say hello and not timeout', (done: DoneFn) => {
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
    it('should return immediately with fake call', (done: DoneFn) => {
        spyOn(slowApi, "fetchGreeting").and.callFake((userName: string) => {
            return Promise.resolve('You suck,');
        });

        spyOn(slowApi, "fetchQuestion").and.callFake((userName: string) => {
            return Promise.resolve('You forgot to bring your brownbag!');
        });

        const userName = 'Luiz';
        greetUser(userName).then(result => {
            //console.log(result);
            expect(result).toContain('You suck');
            expect(result).toContain(userName);
            expect(result).toContain('brownbag');
            done();
        }).catch(err => {
            done.fail;
        });
    });

    // this test will pass because we stubbed the network layer
    it('should return immediately with stub call', (done: DoneFn) => {
        spyOn(slowApi, "fetchGreeting").and.stub();
        spyOn(slowApi, "fetchQuestion").and.stub();

        const userName = 'test name';
        greetUser(userName).then(result => {
            done();
        }).catch(err => {
            done.fail;
        });
    });

    // this unit test uncovers a bug
    // it('should return error when fetchGreeting is forbidden', (done: DoneFn) => {
    //     spyOn(slowApi, "fetchGreeting").and.returnValue(Promise.reject(403));
    //     spyOn(slowApi, "fetchQuestion").and.stub();
    //
    //     const userName = 'test name';
    //     greetUser(userName).then(result => {
    //         done.fail();
    //     }).catch(err => {
    //         expect(err).toBe(403);
    //         done();
    //     });
    // });

});