/* Utility */

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

function objectToLocalStorage(key, value) {
    var json = JSON.stringify(value)
    localStorage.setItem(key, value)
}

function objectFromLocalStorage(key, def = null) {
    var json = localStorage.getItem(key)
    if (json != null) {
        return JSON.parse(json)
    } else {
        return def
    }
}

function makeError(message, status) {
    return {
        message: message,
        status: status
    }
}

function redirectUnsiggned(){
    if(localStorage.getItem("oid") == null){
        window.location.assign("home.html")
    }
}

/* Common */

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

function setTextStatusClass(element, status) {
    for (k in Status) {
        element.classList.remove(Status[k].textClass)
    }
    element.classList.add(status.textClass)
}

/* Initialization */

const binding = {
    oidInput: null,
    uidInput: null,
    passwordInput: null,
    signInStatusLabel: null,
    showSignInButton: null,
    signInContainer: null,
    signInButton: null,
    openSidebarButton: null,
    closeSidebarButton: null,
    sidebar: null,
    signOutButton: null
}

function loadListener() {
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
    binding.signOutButton = document.getElementById("signOutButton")
    initViews()
}

window.addEventListener("load", loadListener)

function initViews() {
    binding.showSignInButton.addEventListener("click", () => {
        binding.signInContainer.classList.remove("hidden")
    })
    binding.signOutButton.addEventListener("click", () => {
        localStorage.removeItem("oid")
        localStorage.removeItem("uid")
        window.location.assign("home.html")
    })
    //TODO: update this functionality when a proper backend and component framework be present
    if (window.location.href.endsWith("home.html")) {
        binding.signInContainer.addEventListener("click", (event) => {
            if (event.target == signInContainer) {
                binding.signInContainer.classList.add("hidden")
            }
        })
        binding.signInButton.addEventListener("click", () => {
            signInCoroutine()
        })
    }
    binding.openSidebarButton.addEventListener("click", () => {
        binding.sidebar.classList.remove("hidden")
    })
    binding.closeSidebarButton.addEventListener("click", () => {
        binding.sidebar.classList.add("hidden")
    })
    if (localStorage.getItem("oid") == null) {
        showSignInButton()
    } else {
        showSignOutButton()
    }
}

function showSignInButton() {
    binding.showSignInButton.classList.remove("hidden")
    binding.signOutButton.classList.add("hidden")
}

function showSignOutButton() {
    binding.showSignInButton.classList.add("hidden")
    binding.signOutButton.classList.remove("hidden")
}

/* Sign in */

const expectedCredentials = {
    oid: "org-123456",
    uid: "diefesson",
    password: "12345678"
}

function getCredentials() {
    return {
        oid: binding.oidInput.value,
        uid: binding.uidInput.value,
        password: binding.passwordInput.value
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
    localStorage.setItem("oid", binding.oidInput.value)
    localStorage.setItem("uid", binding.uidInput.value)
    await sleep(1000)
    window.location.assign("employer-home.html")
}