class Bank {
  constructor(balance) {
    this.balance = balance
  }

withdraw(amount) {
    // guard clause
    if (this.balance - amount <= 0) {
    console.log('You cannot withdraw below your Balance!')
       return
    }
    this.balance -= amount
    console.log('withdrew', `$${amount}`)
    console.log({balance: this.balance})
}

deposit(amount) {
    this.balance += amount
    console.log('deposited', `$${amount}`)
    console.log({balance: this.balance})
}
}

const qaziChecking = new Bank(100)
console.log(qaziChecking.balance)
qaziChecking.deposit(100)
qaziChecking.withdraw(1000)

const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = document.getElementById('amount')
const balanceDiv = document.getElementById('balance')

depositButton.onclick = () => {
    const amount = Number(amountInput.value)
    qaziChecking.deposit(Number(amountInput.value))
    balanceDiv.innerText = `Balance: ${qaziChecking.balance}`
}    

withdrawButton.onclick = () => {
    const amount = Number(amountInput.value)
    qaziChecking.withdraw(Number(amountInput.value))
    balanceDiv.innerText = `Balance: ${qaziChecking.balance}`
}    
