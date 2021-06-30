# Callback Countdown

- app.js
```JavaScript
const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  timer(seconds);
};

main();
```

- controllers.js
```JavaScript
const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  setInterval(function () {
    seconds--
    displayCountdown(seconds)
    if (seconds === 0) {
      clearInterval(this)
      // console.log(this)
    }
  }, 1000)
};

module.exports = { timer };
```

-views.js
```JavaScript
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
```