const Command = require('./Command')

module.exports = class Script {

    deploy(host) {
        const command = new Command();
        try {
            command.scp(host, 'config.json');
            command.ssh(host, 'reboot')
        } catch (e){
            command.ssh(host, 'shutdown');
        }


    }
}
