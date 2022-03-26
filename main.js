const washEl = document.getElementById("wash-el")
const mowEl = document.getElementById("mow-el")
const pullEl = document.getElementById("pull-el")
let washCarEl = document.getElementById("wash-car")
let washCarAmount = document.getElementById("amount-car")

let mowLawnEl = document.getElementById("mow-lawn")
let mowLawnAmount = document.getElementById("amount-lawn")

let pullWeedEl = document.getElementById("pull-weeds")
let pullWeedAmount = document.getElementById("amount-weed")

let paymentType = document.getElementById("pay-type");

let totalAmount = document.getElementById("money");

let removeWashEl = document.getElementById("remove-wash")
let removeMowEl = document.getElementById("remove-mow")
let removePullEl = document.getElementById("remove-pull")

let sendEl = document.getElementById("send-el")

let amounts = [10, 20, 30]
let totalAmounts = [];

    washEl.addEventListener("click", function(){
        washCarEl.textContent = `Wash Car`;    
        washCarAmount.textContent = `$${amounts[0]}`
        totalAmounts.push(amounts[0])
        let totalSum = totalAmounts.reduce((partialSum, a) => partialSum + a, 0)
        totalAmount.textContent = `$${totalSum}`
        removeWashEl.textContent = `Remove`
        paymentType.textContent = `We accept cash, credit card, or PayPal.`
    })

    mowEl.addEventListener("click", function(){
        mowLawnEl.textContent = `Mow Lawn`;
        mowLawnAmount.textContent = `$${amounts[1]}`
        totalAmounts.push(amounts[1])
        let totalSum = totalAmounts.reduce((partialSum, a) => partialSum + a, 0)
        totalAmount.textContent = `$${totalSum}`
        removeMowEl.textContent = `Remove`
        paymentType.textContent = `We accept cash, credit card, or PayPal.`
    })

    pullEl.addEventListener("click", function(){
        pullWeedEl.textContent = `Pull Weeds`;
        pullWeedAmount.textContent = `$${amounts[2]}`;
        totalAmounts.push(amounts[2])
        let totalSum = totalAmounts.reduce((partialSum, a) => partialSum + a, 0)
        totalAmount.textContent = `$${totalSum}`
        removePullEl.textContent = `Remove`
        paymentType.textContent = `We accept cash, credit card, or PayPal.`
    })

removeWashEl.addEventListener("click", function(){
    delete totalAmounts[0]
    totalSum = totalAmounts.reduce((partialSum, a) => partialSum + a, 0)
    totalAmount.textContent = `$${totalSum}`
})

removeMowEl.addEventListener("click", function(){
    delete totalAmounts[1]
    totalSum = totalAmounts.reduce((partialSum, a) => partialSum + a, 0)
    totalAmount.textContent = `$${totalSum}`
})

removePullEl.addEventListener("click", function(){
    delete totalAmounts[2]
    totalSum = totalAmounts.reduce((partialSum, a) => partialSum + a, 0)
    totalAmount.textContent = `$${totalSum}`
    console.log(taskPullEl)
})


sendEl.addEventListener("click", function(){
    washCarEl.textContent = ""
    washCarAmount.textContent = ""
    
    mowLawnEl.textContent = ""
    mowLawnAmount.textContent = ""

    pullWeedEl.textContent = ""
    pullWeedAmount.textContent = ""

    paymentType.textContent = ""

    totalAmounts = []
    totalAmount.textContent = "$0";
    
    removeWashEl.textContent = ""
    removeMowEl.textContent = ""
    removePullEl.textContent = ""
})


