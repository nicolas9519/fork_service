const { fork } = require('child_process');
const path = require('path');
const { env } = require('../../config/config');

class ForkService {

  constructor() {
    this.execArgv = env === 'debug' ? ["--inspect=0"] : [];
    this.runningChild = false;
  }

  get = async (req, res) => {
    if (this.runningChild) return res.send('Already running');
    const myChild = fork(path.join(__dirname, 'fork.child.js'), [], { execArgv: this.execArgv });
    myChild.on('message', this.toggleRunningChild);
    myChild.send(req.query.quantity);
    return res.send(true);
  }

  toggleRunningChild = async (obj) => {
    this.runningChild = obj;
  }

}

module.exports = new ForkService();
