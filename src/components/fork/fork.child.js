class ForkChild {
  async myProcess(number) {
    process.send(true);
    for (let i = 0; i < number; i++) {
      console.log(`number ${i}`);
    }
    process.send(false);
  }
}

const forkChild = new ForkChild();

process.on('message', forkChild.myProcess);
