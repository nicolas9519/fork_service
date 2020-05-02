class ForkChild {
  async myProcess(number) {
    for (let i = 0; i < number; i++) {
      console.log(`number ${i}`);
    }
  }
}

const forkChild = new ForkChild();

process.on('message', forkChild.myProcess);
