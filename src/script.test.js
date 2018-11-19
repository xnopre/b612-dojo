jest.mock('./Command'); // this happens automatically with automocking
const Script = require('./script')
const Command = require('./Command');

describe("Script", () => {

    test("should deploy on hosts", () => {

        const scpMock = jest.fn();
        const sshMock = jest.fn();
        Command.mockImplementation(() => {
            return {
                scp: scpMock,
                ssh: sshMock
            };
        });

        const script = new Script();
        script.deploy('host1');
        console.log('Calls to scp: ', scpMock.mock.calls);
        expect(scpMock.mock.calls.length).toBe(1);
        expect(scpMock.mock.calls[0][0]).toBe('host1');
        expect(scpMock.mock.calls[0][1]).toBe('config.json');

        expect(sshMock.mock.calls.length).toBe(1);
        expect(sshMock.mock.calls[0][0]).toBe('host1');
        expect(sshMock.mock.calls[0][1]).toBe('reboot');

    })

    test("should catch scp error", () => {

        const scpMock = jest.fn(()=> {throw Error('Problem scp')});
        const sshMock = jest.fn();
        Command.mockImplementation(() => {
            return {
                scp: scpMock,
                ssh: sshMock
            };
        });

        const script = new Script();
        script.deploy('host1');
        console.log('Calls to scp: ', scpMock.mock.calls);
        expect(scpMock.mock.calls.length).toBe(1);
        expect(scpMock.mock.calls[0][0]).toBe('host1');
        expect(scpMock.mock.calls[0][1]).toBe('config.json');

        expect(sshMock.mock.calls.length).toBe(1);
        expect(sshMock.mock.calls[0][0]).toBe('host1');
        expect(sshMock.mock.calls[0][1]).toBe('shutdown');

    })

})
