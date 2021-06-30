const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.yellow(figlet.textSync('Timer!')));
  // Your code here...
  const menit = Math.floor(seconds / 60)
  const detik = seconds - menit * 60
  console.log(chalk.green(figlet.textSync(`${menit < 10 ? '0' + menit : menit} : ${detik < 10 ? '0' + detik : detik}`)))
};

module.exports = { displayCountdown };

