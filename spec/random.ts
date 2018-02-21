import {} from 'jasmine'

describe('toBe', () => {
    it('compares with ===', () => {
        expect(true).toBe(true);
        expect(false).not.toBe(true);

        expect(true).toEqual(true);
        expect(false).not.toEqual(true);
    });

    it('compares strings with ===', () => {
        const a = 'abc';
        const b = 'abc';

        expect(a).toBe(b);
        expect(a).toEqual(b);
    });


    it('compares references for objects', () => {
        const objectA = {};
        const objectB = objectA;

        expect(objectB).toBe(objectA);
        expect(objectB).not.toBe(null);

        expect(objectB).toBeDefined();
        expect(objectB).not.toBeUndefined();
    });
});

describe('toEqual', () => {
    it('compares values', () => {
        const objectA = { id: '123' };
        const objectB = { id: '456'};

        expect(objectB).not.toBe(objectA);
        expect(objectB).not.toEqual(objectA);
    });

    it('toEqual compares values', () => {
        const objectA = {
            id: '123',
            name: 'Joe'
        };
        const objectB = {
            id: '123',
            name: 'Joe'
        };

        expect(objectB).not.toBe(objectA);
        expect(objectB).toEqual(objectA);
    });
});

it('toMatch matches regular expressions', () => {
    const message = 'Tests are your friends';

    expect(message).toMatch(/are/);
    expect(message).toMatch('are');
    expect(message).not.toMatch(/enemies/);
});

it('numeric comparators', () => {
    const pi = 3.1415926;
    const e = 2.78;

    expect(e).toBeLessThan(pi);
    expect(e).not.toBeGreaterThan(pi);

    expect(pi).toBeGreaterThan(e);
    expect(pi).not.toBeLessThan(e);
});

it('matchers for undefined and null', () => {
    const a = { id: '123', address: null };

    expect(a.id).toBeDefined();

    expect(a['name']).not.toBeDefined();
    expect(a['name']).toBeUndefined();
    expect(a['name']).toBe(undefined);
    expect(a['name']).toEqual(undefined);

    expect(a.address).toBeNull();
    expect(a.address).toEqual(null);
});

xit('matchers for contains', () => {
    const a = ['Tests', 'are', 'your', 'friends'];
    const b = 'Tests are your friends';
    const c = { subject: 'Tests', verb: 'are', noun: 'your friends'};

    expect(a).toContain('are');
    expect(a).not.toContain('enemies');

    expect(b).toContain('are');
    expect(b).not.toContain('enemies');

    expect(c).toContain('are');
    expect(c).not.toContain('enemies');
});


it('expect to throw error with message or type', () => {
    const boom = function() {
        throw new TypeError('explosions and fires');
    };

    expect(boom).toThrow();
    expect(boom).toThrowError('explosions and fires');
    expect(boom).toThrowError(/ and /);
    expect(boom).toThrowError(TypeError);
    expect(boom).toThrowError(TypeError, 'explosions and fires');
});