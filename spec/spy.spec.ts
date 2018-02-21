import {} from 'jasmine'

class Computer {
    private _description: string;

    constructor(description: string) {
        this._description = description;
    }

    getDescription(year: number): string {
        return this._description + ' ' + year;
    }
}

describe('spy', () => {

    it('does nothing if we stub', () => {
        const computer = new Computer('Mac Book Pro');
        spyOn(computer, 'getDescription').and.stub();

        const result = computer.getDescription(2015);

        expect(result).toBeUndefined(); // because we stubbed getDescription (we want to silence te function)
        expect(computer.getDescription).toHaveBeenCalled();
    });

    it('calls actual method if we callThrough', () => {
        const computer = new Computer('Mac Book Pro');
        spyOn(computer, 'getDescription').and.callThrough();

        const result = computer.getDescription(2015);

        expect(result).toEqual('Mac Book Pro 2015');
        expect(computer.getDescription).toHaveBeenCalled(); // we can still verify because it's spy
    });

    it('keeps track of all calls', () => {
        const computer = new Computer('Mac Book Pro');
        spyOn(computer, 'getDescription').and.callThrough();

        computer.getDescription(2015);
        computer.getDescription(2016);
        computer.getDescription(2017);

        expect(computer.getDescription).toHaveBeenCalledTimes(3);
        expect(computer.getDescription).toHaveBeenCalledWith(2015);
        expect(computer.getDescription).toHaveBeenCalledWith(2016);
        expect(computer.getDescription).toHaveBeenCalledWith(2017);
        expect(computer.getDescription).toHaveBeenCalledWith(jasmine.any(Number));
    });

    it('can fake return values', () => {
        const computer = new Computer('Mac Book Pro');
        spyOn(computer, 'getDescription').and.returnValues('Asus', 'Samsung');

        expect(computer.getDescription(2015)).toEqual('Asus');
        expect(computer.getDescription(2016)).toEqual('Samsung');
        expect(computer.getDescription(2017)).toBeUndefined();
    });

    it('can throw errors', () => {
        const computer = new Computer('Mac Book Pro');
        spyOn(computer, 'getDescription').and.throwError('boom');

        const methodThatConsumesComputer = () => {
            computer.getDescription(2015);
        };

        expect(methodThatConsumesComputer).toThrowError('boom');
    });


    it('can fake the method call', () => {
        const computer = new Computer('Mac Book Pro');
        spyOn(computer, 'getDescription').and.callFake(year => {
            return 'In 4 years it will be ' + (year + 4);
        });

        expect(computer.getDescription(2016)).toEqual('In 4 years it will be 2020');
    });

    it("create mock objects", () => {
        const tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

        tape.play();
        tape.rewind(0);

        expect(tape.play).toBeDefined();
        expect(tape.play).toHaveBeenCalled();
        expect(tape.rewind).toBeDefined();
        expect(tape.rewind).toHaveBeenCalledWith(0);
    });
});