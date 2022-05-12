const fs = require("fs");
const chalk = require("chalk");
const Web3 = require('web3');
var Eth = require('web3-eth');
const config = getConfig();
const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"));
const contractABI = require("./contractABI.json");
var userEnteredPkey;
const schedule = require('node-schedule');

const XHR = require('xhr2-cookies').XMLHttpRequest
XHR.prototype._onHttpRequestError = function (request, error) {
  if (this._request !== request) {
      return;
  }
  // A new line
  console.log(error, 'request')
  this._setError();
  request.abort();
  this._setReadyState(XHR.DONE);
  this._dispatchProgress('error');
  this._dispatchProgress('loadend');
};

async function main() {
			console.log('Bot starting...');
      const job = schedule.scheduleJob(fileJson.schedule, function(){
        console.log(`${chalk.bgBlue.bold(" Info ")} ${chalk.bold("Compounding now!")}`)
        console.log("Join my Discord! https://discord.gg/agJBJ8eA9J")
        console.log("Subscribe to my channel! https://www.youtube.com/channel/UC0ecqg1Re5QMj7iYofCLPAQ")
        compoundAll();
    })
    const checkBal = schedule.scheduleJob("0 * * * *", async function(){
        bal = await web3.eth.getBalance(account.address)
        if(bal <= 5000000000000000){
            console.log(`${chalk.bgYellow.red.bold(" WARN ")} ${chalk.bold("Balance of bot is 0!")} Please send a small amount of BNB to the bot address`)
        }
    })
  }

async function getAccount() {
  if (fs.existsSync("./config.json")) {
    let account = await web3.eth.accounts.privateKeyToAccount('0x'+userEnteredPkey);
    console.log(
      `${chalk.bgBlue.bold(" Info ")} ${chalk.bold("| Loaded wallet")} ${
        account.address
      }`
    );
    console.log("Join my Discord! https://discord.gg/agJBJ8eA9J")
    console.log("Subscribe to my channel! https://www.youtube.com/channel/UC0ecqg1Re5QMj7iYofCLPAQ")
    bal = await web3.eth.getBalance(account.address).then(function (bal) {
      if (bal <= 5000000000000000) {
        console.log(
          `${chalk.bgYellow.red.bold(" WARN ")} ${chalk.bold(
            "Your account is low on BNB!"
          )} Please send a small amount of BNB to your wallet address`
        );
      }
    });
  }
  await main();
}

async function getConfig() {
  if (!fs.existsSync("./config.json")) {
    data = JSON.stringify(
      {
        dripcontract: ["0xFFE811714ab35360b67eE195acE7C10D93f89D8C"],
        schedule: "0 0 * * *",
        rpcUrl: "https://bsc-dataseed.binance.org/",
        gasPrice: 5,
        gasLimit: 1000000,
      },
      null,
      3
    );
    console.log(`${chalk.bgBlue.bold("P16 Drip Auto Compounder Framework")}`);
    console.log(
      `${chalk.bgBlue.bold(
        "Generated Config File..."
      )}|`
    );
    fs.writeFileSync("./config.json", data, "utf8");
  } else {
    const prompt = require('prompt');
    fileJson = JSON.parse(fs.readFileSync("./config.json"));
    console.log(`${chalk.bgBlue.bold("P16 Drip Auto Compounder Framework")}`);
    prompt.start()
    await prompt.get(['private_key'], async function (err, result) {
    userEnteredPkey = result.private_key
    const wallet = getAccount()
    })
  }
}

async function compound(contractAddress) {
  contract = await new web3.eth.Contract(contractABI, contractAddress);
  tx = {
    to: contractAddress,
    data: contract.methods.roll().encodeABI(),
    gasPrice: web3.utils.toWei(fileJson.gasPrice.toString(), "gwei"),
    gas: fileJson.gasLimit,
  };
  signed = await web3.eth.accounts.signTransaction(tx, userEnteredPkey);
  try {
    console.log(
      `${chalk.bgBlue.bold(" Info ")} ${chalk.bold(
        "| Sending Transaction"
      )} Hash: ${signed.transactionHash}`
    );
    receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
    console.log(
      `${chalk.bgGreen.bold(" Transaction Confirmed ")} ${chalk.bold(
        "| Compounded Drip"
      )} ${contractAddress} ${chalk.bold("at tx")} ${receipt.blockHash}`
    );
  } catch (error) {
    console.log(
      `${chalk.bgRed.bold(" Error ")} ${chalk.red.bold.underline(
        "| " + error.message
      )}`
    );
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function compoundAll() {
  for (i in fileJson.dripcontract) {
    await compound(fileJson.dripcontract[i]);
    await sleep(5000);
  }
}
