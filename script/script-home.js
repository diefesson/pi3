const expectedCredentials = {
    oid: "org-123456",
    uid: "diefesson",
    password: "12345678"
}

var oidInput
var uidInput
var passwordInput
var signInStatusLabel
var showSignInButton
var signInContainer
var signInButton

onload = function (e) {
    oidInput = document.getElementById("oidInput")
    uidInput = document.getElementById("uidInput")
    passwordInput = document.getElementById("passwordInput")
    signInStatusLabel = document.getElementById("signInStatusLabel")
    showSignInButton = document.getElementById("showSignInButton")
    signInContainer = document.getElementById("signInContainer")
    signInButton = document.getElementById("signInButton")
    initViews()
}

function initViews() {
    showSignInButton.addEventListener("click", (event) => {
        signInContainer.classList.remove("hidden")
    })
    signInContainer.addEventListener("click", (event) => {
        if (event.target == signInContainer) {
            signInContainer.classList.add("hidden")
        }
    })
    signInButton.addEventListener("click", () => {
        signIn()
    })
}

const Status = {
    INFO: {
        textClass: "text-info",
        backgroundClass: "background-info"
    },
    SUCCESS: {
        textClass: "text-success",
        backgroundClass: "background-success"
    },
    ALERT: {
        textClass: "text-alert",
        backgroundClass: "background-alert"
    },
    ERROR: {
        textClass: "text-error",
        backgroundClass: "background-error"
    }
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

function toLocalStorage(key, value) {
    var json = JSON.stringify(value)
    localStorage.setItem(key, value)
}

function fromLocalStorage(key, value, def = null) {
    var json = localStorage.getItem(key)
    if (json != null) {
        return JSON.parse(json)
    } else {
        return def
    }
}

function setTextStatusClass(element, status) {
    for (k in Status) {
        element.classList.remove(Status[k].textClass)
    }
    element.classList.add(status.textClass)
}

function getCredentials() {
    return {
        oid: oidInput.value,
        uid: uidInput.value,
        password: passwordInput.value
    }
}

function makeError(message, status) {
    return {
        message: message,
        status: status
    }
}

function verifyCredentials(credentials) {
    if (credentials.oid == "")
        return makeError("Missing OID", Status.INFO)
    if (credentials.uid == "")
        return makeError("Missing UID", Status.INFO)
    if (credentials.password == "")
        return makeError("Missing password", Status.INFO)
    return null
}

function auth(credentials) {
    if (credentials.oid != expectedCredentials.oid)
        return makeError("Incorrect credentials", Status.ERROR)
    if (credentials.uid != expectedCredentials.uid)
        return makeError("Incorrect credentials", Status.ERROR)
    if (credentials.password != expectedCredentials.password)
        return makeError("Incorrect credentials", Status.ERROR)
    return null
}

async function signInCoroutine() {
    const credentials = getCredentials()
    var error = verifyCredentials(credentials)

    if (error != null) {
        signInStatusLabel.innerText = error.message
        setTextStatusClass(signInStatusLabel, error.status)
        return
    }

    signInStatusLabel.innerText = "Signing in..."
    setTextStatusClass(signInStatusLabel, Status.INFO)
    await sleep(2000)
    error = auth(credentials)
    if (error != null) {
        signInStatusLabel.innerText = error.message
        setTextStatusClass(signInStatusLabel, error.status)
        return
    }

    signInStatusLabel.innerText = "Success"
    setTextStatusClass(signInStatusLabel, Status.SUCCESS)
    toLocalStorage("oid", oidInput.value)
    toLocalStorage("uid", uidInput.value)
    await sleep(1000)
    window.location.assign("employer-home.html")
}

function signIn() {
    signInCoroutine()
}