class ForkChild {

  myProcess = async (number) => {
    process.send(true);
    this.fibonacci(number);
    setTimeout(() => {
      process.send(false);
    }, 5000);
  }

  fibonacci = (number) => {
    if (number <= 2) return 1;
    const sequence = [0, 1, 1];
    for (let i = 3; i <= number; i++) {
      sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence[number];
  }
}

const forkChild = new ForkChild();

process.on('message', forkChild.myProcess);
