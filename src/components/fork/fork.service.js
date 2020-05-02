const { fork } = require('child_process');

class ForkService {

  async get(req, res) {
    const myChild = fork('src/components/fork/fork.child.js');
    myChild.send(50);
    return res.send(true);
  }

}

module.exports = new ForkService();
