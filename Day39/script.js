// Character sets
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-={}[]|:;<>,.?/~";

// Elements
const password = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const toggleBtn = document.getElementById("toggleBtn");
const strengthText = document.getElementById("strengthText");
const strengthIndicator = document.getElementById("strengthIndicator");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const toast = document.getElementById("toast");

// Password history
let history = JSON.parse(localStorage.getItem("passwordHistory")) || [];

// Update slider value
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

// Random character
function randomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

// Shuffle password
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
}

// Generate password
function generatePassword() {

    let chars = "";
    let guaranteed = [];

    if (uppercase.checked) {
        chars += upperChars;
        guaranteed.push(randomChar(upperChars));
    }

    if (lowercase.checked) {
        chars += lowerChars;
        guaranteed.push(randomChar(lowerChars));
    }

    if (numbers.checked) {
        chars += numberChars;
        guaranteed.push(randomChar(numberChars));
    }

    if (symbols.checked) {
        chars += symbolChars;
        guaranteed.push(randomChar(symbolChars));
    }

    if (!chars) {
        showToast("Select at least one option!");
        return;
    }

    while (guaranteed.length < lengthSlider.value) {
        guaranteed.push(randomChar(chars));
    }

    const finalPassword = shuffle(guaranteed);

    password.value = finalPassword;

    updateStrength(finalPassword);

    saveHistory(finalPassword);
}

// Update strength
function updateStrength(pass) {
    let score = 0;

    if (pass.length >= 8) score++;
    if (pass.length >= 12) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/\d/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    if (score <= 2) {
        strengthText.textContent = "Weak";
        strengthText.style.color = "#E05A5A";
        strengthIndicator.style.width = "30%";
        strengthIndicator.style.background = "#E05A5A";
    }
    else if (score <= 4) {
        strengthText.textContent = "Medium";
        strengthText.style.color = "#E6B85C";
        strengthIndicator.style.width = "65%";
        strengthIndicator.style.background = "#E6B85C";
    }
    else {
        strengthText.textContent = "Strong";
        strengthText.style.color = "#6DBB5A";
        strengthIndicator.style.width = "100%";
        strengthIndicator.style.background = "#6DBB5A";
    }
}

// Copy password
copyBtn.addEventListener("click", () => {

    if (!password.value) return;

    navigator.clipboard.writeText(password.value);

    showToast("Password Copied!");
});

// Show / Hide password
toggleBtn.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        toggleBtn.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    }
    else {
        password.type = "password";
        toggleBtn.innerHTML = '<i class="fa-regular fa-eye"></i>';
    }

});

// Toast
function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}

// Save history
function saveHistory(pass) {

    history = history.filter(item => item !== pass);

    history.unshift(pass);

    if (history.length > 5) {
        history.pop();
    }

    localStorage.setItem("passwordHistory", JSON.stringify(history));

    renderHistory();

}

// Render history
function renderHistory() {

    historyList.innerHTML = "";

    if (history.length === 0) {

        historyList.innerHTML = `
        <div class="empty-state">
            <i class="fa-solid fa-lock"></i>
            <p>No passwords generated yet.</p>
        </div>
        `;

        return;
    }

    history.forEach((pass, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${pass}</span>

            <div class="actions">

                <button class="copy-history">
                    <i class="fa-regular fa-copy"></i>
                </button>

                <button class="delete-history">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>
        `;

        // Copy history
        li.querySelector(".copy-history").addEventListener("click", () => {

            navigator.clipboard.writeText(pass);

            showToast("Copied!");

        });

        // Delete history
        li.querySelector(".delete-history").addEventListener("click", () => {

            history.splice(index, 1);

            localStorage.setItem("passwordHistory", JSON.stringify(history));

            renderHistory();

        });

        historyList.appendChild(li);

    });
}

// Clear history
clearHistoryBtn.addEventListener("click", () => {

    history = [];

    localStorage.removeItem("passwordHistory");

    renderHistory();

    showToast("History Cleared!");
});

// Generate button
generateBtn.addEventListener("click", generatePassword);

// Initial load
renderHistory();
generatePassword();