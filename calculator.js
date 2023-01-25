document.getElementById("btn-1").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "1"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-2").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "2"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-3").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "3"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-4").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "4"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-5").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "5"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-6").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "6"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-7").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "7"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-8").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "8"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-9").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "9"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-0").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "0"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-plus").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "+"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-minus").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "-"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-times").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "x"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-divide").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "/"
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-percent").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "%"
    console.log(document.getElementById("screen").innerText)
})


document.getElementById("btn-point").addEventListener("click", (e) => {
    document.getElementById("screen").innerText += "."
    console.log(document.getElementById("screen").innerText)
})

document.getElementById("btn-equal").addEventListener("click", (e) => {
    let a = document.getElementById("screen").innerText
    first = parseInt(a[0])
    second = parseInt(a[2])
    operator = a[1]

    if (operator == "+") {
        document.getElementById("screen").innerText = first+second
    }

    if (operator == "-") {
        document.getElementById("screen").innerText = first-second
    }

    if (operator == "x") {
        document.getElementById("screen").innerText = first*second
    }

    if (operator == "/") {
        document.getElementById("screen").innerText = first/second
    }

    b = a.split("+")
    firstt = parseInt(b[0])
    secondd = parseInt(b[2])
    operatorr = a[1]



})



