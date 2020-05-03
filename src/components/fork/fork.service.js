const { fork } = require('child_process');
const myChild = fork('src/components/fork/fork.child.js', [], { execArgv: ["--inspect-brk=0"] });

class ForkService {

  async get(req, res) {
    myChild.send(50);
    return res.send(true);
  }

}

module.exports = new ForkService();
