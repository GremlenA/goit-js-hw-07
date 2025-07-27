const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
    const value = inputEl.value.trim();

    if (value === "") {
        outputEl.textContent = "Anonymous";
    } else {
        outputEl.textContent = value;
    }
});
