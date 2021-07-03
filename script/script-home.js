const expectedCredentials = {
    oid: "org-123456",
    uid: "diefesson",
    password: "12345678"
}

const binding = {
    oidInput,
    uidInput,
    passwordInput,
    signInStatusLabel,
    showSignInButton,
    signInContainer,
    signInButton,
    openSidebarButton,
    closeSidebarButton,
    sidebar
}

onload = function (e) {
    binding.oidInput = document.getElementById("oidInput")
    binding.uidInput = document.getElementById("uidInput")
    binding.passwordInput = document.getElementById("passwordInput")
    binding.signInStatusLabel = document.getElementById("signInStatusLabel")
    binding.showSignInButton = document.getElementById("showSignInButton")
    binding.signInContainer = document.getElementById("signInContainer")
    binding.signInButton = document.getElementById("signInButton")
    binding.openSidebarButton = document.getElementById("openSidebarButton")
    binding.closeSidebarButton = document.getElementById("closeSidebarButton")
    binding.sidebar = document.getElementById("sidebar")
    initViews()
}

function initViews() {
    binding.showSignInButton.addEventListener("click", (event) => {
        binding.signInContainer.classList.remove("hidden")
    })
    binding.signInContainer.addEventListener("click", (event) => {
        if (event.target == signInContainer) {
            binding.signInContainer.classList.add("hidden")
        }
    })
    binding.signInButton.addEventListener("click", () => {
        signIn()
    })
    binding.openSidebarButton.addEventListener("click", ()=>{
        binding.sidebar.classList.remove("hidden")
    })
    binding.closeSidebarButton.addEventListener("click", ()=>{
        binding.sidebar.classList.add("hidden")
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
        oid: binding.oidInput.value,
        uid: binding.uidInput.value,
        password: binding.passwordInput.value
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
        binding.signInStatusLabel.innerText = error.message
        setTextStatusClass(binding.signInStatusLabel, error.status)
        return
    }

    signInStatusLabel.innerText = "Signing in..."
    setTextStatusClass(binding.signInStatusLabel, Status.INFO)
    await sleep(2000)
    error = auth(credentials)
    if (error != null) {
        binding.signInStatusLabel.innerText = error.message
        setTextStatusClass(binding.signInStatusLabel, error.status)
        return
    }

    signInStatusLabel.innerText = "Success"
    setTextStatusClass(signInStatusLabel, Status.SUCCESS)
    toLocalStorage("oid", binding.oidInput.value)
    toLocalStorage("uid", binding.uidInput.value)
    await sleep(1000)
    window.location.assign("employer-home.html")
}

function signIn() {
    signInCoroutine()
}