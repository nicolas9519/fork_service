const { fork } = require('child_process');

class ForkService {

  constructor () {
    this.myChild = fork('src/components/fork/fork.child.js', [], { execArgv: ["--inspect-brk=0"] });
    this.runningChild = false;
    this.myChild.on('message', this.toggleRunningChild.bind(this));
    this.get = this.get.bind(this);
  }

  async get(req, res) {
    if (this.runningChild) return res.send('Already running');
    this.myChild.send(50);
    return res.send(true);
  }

  async toggleRunningChild(obj) {
    this.runningChild = obj;
  }

}

module.exports = new ForkService();
