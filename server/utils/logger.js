const chalk = require("chalk");
const ip = require("ip");

const divider = chalk.gray('\n-----------------------------------');

const logger = {
  error: (err) => {
    console.error(chalk.red(err));
  },
  appStarted: (port, tunnelStarted) => {
    console.log(`Server started ${ chalk.green('✓') }`);
    console.log(`${ chalk.bold("Access URLs:") }${ divider }
    Localhost: ${ chalk.magenta(`http://localhost:${ port }`) }
    LAN: ${ chalk.magenta(`http://${ ip.address() }:${ port }`)}
    ${ chalk.blue(`Press ${ chalk.italic("CTRL-C") } to stop`) }`);
  }
};

module.exports = logger;
