class Client {
  constructor(name) {
    this.name = name;
    this.purchaseDaysAgo = 0;
  }

  printNameFunction() {
    setInterval(() => {
      console.log(this.name)
      // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
      console.log(this.purchaseDaysAgo += 1)
    }, 1000);
}
}

c = new Client("Gustavo Rabelo");

c.printNameFunction()
