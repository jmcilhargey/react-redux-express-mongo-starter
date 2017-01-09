const chalk = require("chalk");
const ip = require("ip");

const divider = chalk.gray("\n----------------------------------");

const logger = {
  error: (err) => {
    console.error(chalk.red(err));
  },
  started: (port, ip) => {
    console.log(`Server started ${ chalk.green("✓") }`);
    console.log(`${ chalk.bold("Access URLs:") }${ divider }`)
    console.log(`Localhost: ${ chalk.magenta(`http://localhost:${ port }`) }`)
    console.log(`LAN: ${ chalk.magenta(`http://${ ip }:${ port }`)}`)
    console.log(`${ chalk.blue(`Press ${ chalk.italic("CTRL-C") } to stop`)}`)
  }
};

module.exports = logger;
