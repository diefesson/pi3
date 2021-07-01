const expectedOid = "org-123456"
const expectedUid = "diefesson"
const expectedPassword = "12345678"

var oidInput
var uidInput
var passwordInput
var signInStatusLabel
var showSignInButton
var signInContainer

onload = function (e) {
    oidInput = document.getElementById("#oidInput")
    uidInput = document.getElementById("#uidInput")
    passwordInput = document.getElementById("#passwordInput")
    signInStatusLabel = document.getElementById("signInStatusLabel")
    showSignInButton = document.getElementById("showSignInButton")
    signInContainer = document.getElementById("signInContainer")
    initViews()
}

function initViews(){
    showSignInButton.addEventListener("click", (event) =>{
        signInContainer.classList.remove("hidden")
    })
    signInContainer.addEventListener("click", (event) =>{
        if(event.target == signInContainer){
            signInContainer.classList.add("hidden")
        }
    })
}

const textStatusClasses = {
    processing: "text-processing",
    success: "text-success",
    alert: "text-alert",
    error: "text-error"
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

function toLocalStorage(key, value){
    var json = JSON.stringify(value)
    localStorage.put(key, value)
}

function fromLocalStorage(key, value, def=null){
    var json = localStorage.get(key)
    if (json != null){
        return JSON.parse(json)
    } else {
        return def
    }
}

function setTextStatusClass(element, className){
    element.classList.remove(...textStatus)
    element.classList.add(className)
}

function verifySignIn() {
    if (expectedOid != oidInput.value)
        return false
    if (expectedUid != uidInput.value)
        return false
    if (expectedPassword != passwordInput.value)
        return false
    return true
}

async function signInCoroutine() {
    signInStatusLabel.innerText = "Signing in..."
    setTextStatusClass(signInStatusLabel, textStatusClasses.processing)
    await sleep(2000)
    if (verifySignIn()){
        signInStatusLabel.innerText = "Success"
        setTextStatusClass(signInStatusLabel, textStatusClasses.success)
        toLocalStorage("oid", oidInput.value)
        toLocalStorage("uid", uidInput.value)
        await sleep(1000)
        window.location.href = "employer-home.html"
    } else {
        signInStatusLabel.innerText = "Incorrect credentials"
        setTextStatusClass(signInStatusLabel, textStatusClasses.error)
        await sleep(1000)
        signInStatusLabel.innerText = ""
    }
}

function signIn() {
    signInCoroutine()
}