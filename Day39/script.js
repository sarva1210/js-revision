// Elements
const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const toggleBtn = document.getElementById("toggleBtn");
const generateBtn = document.getElementById("generateBtn");

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const strengthIndicator = document.getElementById("strengthIndicator");
const strengthText = document.getElementById("strengthText");

const historyList = document.getElementById("historyList");
const toast = document.getElementById("toast");

// Characters
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-={}[]<>?/";

// Random character
function randomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

// Shuffle password
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Generate password
function generatePassword() {
    let selectedSets = [];
    let allCharacters = "";

    if (uppercase.checked) {
        selectedSets.push(upperChars);
        allCharacters += upperChars;
    }

    if (lowercase.checked) {
        selectedSets.push(lowerChars);
        allCharacters += lowerChars;
    }

    if (numbers.checked) {
        selectedSets.push(numberChars);
        allCharacters += numberChars;
    }

    if (symbols.checked) {
        selectedSets.push(symbolChars);
        allCharacters += symbolChars;
    }

    if (selectedSets.length === 0) {
        passwordInput.value = "";
        strengthIndicator.style.width = "0%";
        strengthText.textContent = "Select an option";
        return;
    }

    let password = [];

    selectedSets.forEach(set => {
        password.push(randomChar(set));
    });

    while (password.length < Number(lengthSlider.value)) {
        password.push(randomChar(allCharacters));
    }

    password = shuffle(password).join("");

    passwordInput.value = password;

    checkStrength(password);
    saveHistory(password);
    saveSettings();
}

// Check strength
function checkStrength(password) {
    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
        strengthIndicator.style.width = "30%";
        strengthIndicator.style.background = "#ef4444";
        strengthText.textContent = "Weak";
    } else if (score <= 4) {
        strengthIndicator.style.width = "65%";
        strengthIndicator.style.background = "#f59e0b";
        strengthText.textContent = "Medium";
    } else {
        strengthIndicator.style.width = "100%";
        strengthIndicator.style.background = "#22c55e";
        strengthText.textContent = "Strong";
    }
}

// Show toast
function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

// Save history
function saveHistory(password) {
    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.unshift(password);
    history = history.slice(0, 5);

    localStorage.setItem("history", JSON.stringify(history));

    renderHistory();
}

// Render history
function renderHistory() {
    const history = JSON.parse(localStorage.getItem("history")) || [];

    historyList.innerHTML = "";

    history.forEach(password => {
        const li = document.createElement("li");
        li.textContent = password;
        historyList.appendChild(li);
    });
}

// Save settings
function saveSettings() {
    const settings = {
        length: lengthSlider.value,
        uppercase: uppercase.checked,
        lowercase: lowercase.checked,
        numbers: numbers.checked,
        symbols: symbols.checked
    };

    localStorage.setItem("settings", JSON.stringify(settings));
}

// Load settings
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem("settings"));

    if (!settings) return;

    lengthSlider.value = settings.length;
    lengthValue.textContent = settings.length;

    uppercase.checked = settings.uppercase;
    lowercase.checked = settings.lowercase;
    numbers.checked = settings.numbers;
    symbols.checked = settings.symbols;
}

// Copy password
copyBtn.addEventListener("click", () => {
    if (!passwordInput.value) return;

    navigator.clipboard.writeText(passwordInput.value);

    const icon = copyBtn.querySelector("i");

    icon.classList.replace("fa-copy", "fa-check");

    showToast("Password Copied!");

    setTimeout(() => {
        icon.classList.replace("fa-check", "fa-copy");
    }, 1500);
});

// Toggle password
toggleBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    } else {
        passwordInput.type = "password";
        toggleBtn.innerHTML = `<i class="fa-regular fa-eye"></i>`;
    }
});

// Generate button
generateBtn.addEventListener("click", generatePassword);

// Slider event
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
    generatePassword();
});

// Checkbox events
[uppercase, lowercase, numbers, symbols].forEach(option => {
    option.addEventListener("change", generatePassword);
});

// Initialize app
loadSettings();
renderHistory();
generatePassword();