const chalk = require("chalk");
const log = console.log;
const ip = require("ip");

const divider = chalk.gray("--------------------------------------");

const logger = {
  error: (err) => {
    log(chalk.red(err));
  },
  started: (port, ip) => {
    log(`${ chalk.cyan(`Press ${ chalk.italic("CTRL-C") } to stop`)}`);
    log(`${ chalk.green("✓ Server started") }`);
    log(`${ divider }`);
    log(`Localhost: ${ chalk.magenta(`http://localhost:${ port }`) }`);
    log(`LAN: ${ chalk.magenta(`http://${ ip }:${ port }`)}`);
  },
  connected: (uri) => {
    log(`${ chalk.green("✓ MongoDB connected") }`);
    log(`${ divider }`);
    log(`DB URI: ${ chalk.magenta(uri) }`);
  }
};

module.exports = logger;
